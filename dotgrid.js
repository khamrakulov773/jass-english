/* ═══════════════════════════════════════════════
   DOT GRID — vanilla Canvas 2D (аналог @react-bits/DotGrid)
   Сетка точек, реагирующая на курсор/касание, с лёгкой
   идле-пульсацией. Адаптивна: на маленьких экранах и при
   prefers-reduced-motion плотность/анимация снижаются.
   ═══════════════════════════════════════════════ */

(function () {
  const DEFAULT_OPTS = {
    gap: 34,            // расстояние между точками
    baseSize: 1.4,       // радиус точки в состоянии покоя
    maxSize: 4.2,        // радиус точки под курсором
    proximity: 130,       // радиус влияния курсора (px)
    baseColor: 'rgba(15,23,42,0.12)',
    activeColor: 'rgba(239,68,68,0.55)',
    idlePulse: true,
    idlePulseSpeed: 0.6
  };

  function initDotGrid(target, userOpts = {}) {
    const container = typeof target === 'string' ? document.querySelector(target) : target;
    if (!container) return null;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const opts = Object.assign({}, DEFAULT_OPTS, userOpts);

    const pos = getComputedStyle(container).position;
    if (pos === 'static') container.style.position = 'relative';
    container.style.overflow = 'hidden';

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.display = 'block';
    container.prepend(canvas);

    const ctx = canvas.getContext('2d', { alpha: true });
    let W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
    let dots = [];
    let mouse = { x: -9999, y: -9999, active: false };
    let running = true;
    let visible = true;
    let t0 = performance.now();

    function gapForWidth(w) {
      // плотнее сетка на десктопе, реже на телефоне — экономим на отрисовке
      if (w < 480) return opts.gap * 1.6;
      if (w < 900) return opts.gap * 1.25;
      return opts.gap;
    }

    function resize() {
      const r = container.getBoundingClientRect();
      W = Math.max(1, Math.floor(r.width));
      H = Math.max(1, Math.floor(r.height));
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      buildDots();
    }

    function buildDots() {
      dots = [];
      const gap = gapForWidth(W);
      const cols = Math.ceil(W / gap) + 1;
      const rows = Math.ceil(H / gap) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * gap,
            y: j * gap,
            phase: Math.random() * Math.PI * 2
          });
        }
      }
    }

    function draw(now) {
      if (!running) return;
      if (!visible) { requestAnimationFrame(draw); return; }
      const dt = (now - t0) / 1000;
      t0 = now;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        let size = opts.baseSize;
        let color = opts.baseColor;

        if (opts.idlePulse && !prefersReduced) {
          const pulse = Math.sin(now * 0.001 * opts.idlePulseSpeed + d.phase);
          size += pulse * 0.35;
        }

        if (mouse.active) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < opts.proximity) {
            const f = 1 - dist / opts.proximity;
            size = opts.baseSize + (opts.maxSize - opts.baseSize) * f;
            color = opts.activeColor;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(d.x, d.y, Math.max(0.4, size), 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    function onMove(e) {
      const r = container.getBoundingClientRect();
      const ev = (e.touches && e.touches[0]) || e;
      mouse.x = ev.clientX - r.left;
      mouse.y = ev.clientY - r.top;
      mouse.active = true;
    }
    function onLeave() { mouse.active = false; mouse.x = mouse.y = -9999; }

    const io = ('IntersectionObserver' in window)
      ? new IntersectionObserver((entries) => {
          entries.forEach(entry => { visible = entry.isIntersecting; });
        }, { threshold: 0.01 })
      : null;
    if (io) io.observe(container);

    function onVisibility() { visible = !document.hidden && visible; }
    document.addEventListener('visibilitychange', onVisibility);

    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
    container.addEventListener('touchmove', onMove, { passive: true });
    container.addEventListener('touchend', onLeave);

    resize();
    requestAnimationFrame(draw);

    return {
      destroy() {
        running = false;
        window.removeEventListener('resize', resize);
        container.removeEventListener('mousemove', onMove);
        container.removeEventListener('mouseleave', onLeave);
        container.removeEventListener('touchmove', onMove);
        container.removeEventListener('touchend', onLeave);
        document.removeEventListener('visibilitychange', onVisibility);
        if (io) io.disconnect();
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      },
      setOptions(newOpts) { Object.assign(opts, newOpts); }
    };
  }

  window.initDotGrid = initDotGrid;
})();