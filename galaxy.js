/* ═══════════════════════════════════════════════
   GALAXY — vanilla Canvas 2D (аналог @react-bits/Galaxy-JS-CSS)
   Параметры по умолчанию совпадают с запросом пользователя:
   starSpeed=0.5, density=1, hueShift=100, speed=0.8,
   glowIntensity=0.15, saturation=0, mouseRepulsion=true,
   repulsionStrength=0.5, twinkleIntensity=0.2,
   rotationSpeed=0.15, transparent=true
   ═══════════════════════════════════════════════ */

(function () {
  const DEFAULT_OPTS = {
    starSpeed: 0.5,
    density: 1,
    hueShift: 100,
    speed: 0.8,
    glowIntensity: 0.15,
    saturation: 0,
    mouseRepulsion: true,
    repulsionStrength: 0.5,
    twinkleIntensity: 0.2,
    rotationSpeed: 0.15,
    transparent: true
  };

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function initGalaxy(target, userOpts = {}) {
    const container = typeof target === 'string'
      ? document.querySelector(target)
      : target;
    if (!container) return null;

    const opts = Object.assign({}, DEFAULT_OPTS, userOpts);

    // Ensure container can host a full canvas
    const pos = getComputedStyle(container).position;
    if (pos === 'static') container.style.position = 'relative';
    container.style.overflow = 'hidden';

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    container.prepend(canvas);

    const ctx = canvas.getContext('2d', { alpha: true });
    let W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
    let stars = [];
    let mouse = { x: -9999, y: -9999, active: false };
    let t0 = performance.now();
    let angle = 0;
    let running = true;

    function resize() {
      const r = container.getBoundingClientRect();
      W = Math.max(1, Math.floor(r.width));
      H = Math.max(1, Math.floor(r.height));
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      buildStars();
    }

    function buildStars() {
      const area = W * H;
      const base = 180; // density=1 → ~180 per 1e6 px
      const count = Math.max(60, Math.floor((area / 1e6) * base * opts.density * 2));
      stars = new Array(count).fill(0).map(() => makeStar());
    }

    function makeStar() {
      const cx = W / 2, cy = H / 2;
      const maxR = Math.hypot(cx, cy) * rand(0.15, 1.05);
      const a = rand(0, Math.PI * 2);
      return {
        r: maxR,
        theta: a,
        orbitTilt: rand(-0.6, 0.6),
        size: rand(0.4, 2.2),
        baseHue: rand(0, 360),
        twinklePhase: rand(0, Math.PI * 2),
        twinkleSpeed: rand(0.6, 2.4),
        depth: rand(0.2, 1),
        drift: rand(-0.02, 0.02)
      };
    }

    function hsl(h, s, l, a) {
      return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }

    function draw(now) {
      if (!running) return;
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      angle += opts.rotationSpeed * opts.speed * dt;

      // Fade trail (for motion blur glow) — transparent background
      if (opts.transparent) {
        ctx.clearRect(0, 0, W, H);
      } else {
        ctx.fillStyle = 'rgba(6,4,20,1)';
        ctx.fillRect(0, 0, W, H);
      }

      // Draw soft galaxy glow halo behind
      if (opts.glowIntensity > 0) {
        const grd = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.75);
        const h1 = (opts.hueShift + 240) % 360;
        const h2 = (opts.hueShift + 320) % 360;
        grd.addColorStop(0, hsl(h1, 70, 55, 0.16 * opts.glowIntensity));
        grd.addColorStop(0.4, hsl(h2, 80, 45, 0.09 * opts.glowIntensity));
        grd.addColorStop(1, hsl(0, 0, 0, 0));
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, W, H);
      }

      const cx = W / 2, cy = H / 2;
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.theta += (opts.starSpeed * 0.35 + s.depth * 0.15) * opts.speed * dt + s.drift * dt;
        const cosA = Math.cos(angle + s.theta);
        const sinA = Math.sin(angle + s.theta);

        let x = cx + cosA * s.r;
        let y = cy + sinA * s.r * (1 - s.orbitTilt * 0.5);

        // Mouse repulsion
        if (opts.mouseRepulsion && mouse.active) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d2 = dx * dx + dy * dy;
          const maxD = 140;
          if (d2 < maxD * maxD && d2 > 0.1) {
            const d = Math.sqrt(d2);
            const f = (1 - d / maxD) * opts.repulsionStrength * 80;
            x += (dx / d) * f;
            y += (dy / d) * f;
          }
        }

        // Twinkle
        const tw = Math.sin(now * 0.001 * s.twinkleSpeed + s.twinklePhase);
        const twinkle = 0.7 + tw * opts.twinkleIntensity;
        const size = s.size * (0.6 + s.depth * 0.8) * twinkle;

        const h = ((s.baseHue + opts.hueShift) % 360 + 360) % 360;
        const sat = Math.max(0, Math.min(100, opts.saturation * 100));

        // Core
        ctx.beginPath();
        ctx.fillStyle = hsl(h, sat, 95, 0.95 * twinkle);
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Halo per star
        if (opts.glowIntensity > 0) {
          ctx.beginPath();
          ctx.fillStyle = hsl(h, sat, 60, 0.22 * opts.glowIntensity * twinkle);
          ctx.arc(x, y, size * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw subtle spiral arms (galaxy structure)
      drawArms(now);

      ctx.globalCompositeOperation = 'source-over';
      requestAnimationFrame(draw);
    }

    function drawArms(now) {
      const arms = 4;
      const cx = W / 2, cy = H / 2;
      const maxR = Math.hypot(cx, cy) * 0.95;
      for (let arm = 0; arm < arms; arm++) {
        const armOffset = (arm / arms) * Math.PI * 2;
        ctx.beginPath();
        let started = false;
        for (let r = 20; r < maxR; r += 2) {
          const t = r / maxR;
          const spiral = t * 5.2;
          const theta = angle + armOffset + spiral;
          const wobble = Math.sin(now * 0.0004 + t * 10) * 0.08;
          const x = cx + Math.cos(theta + wobble) * r * (1 - 0.1 * Math.sin(t * 3.1));
          const y = cy + Math.sin(theta + wobble) * r * (1 - 0.25 * Math.abs(Math.sin(t * 2.3)));
          if (!started) { ctx.moveTo(x, y); started = true; }
          else ctx.lineTo(x, y);
        }
        const h = (opts.hueShift + 280) % 360;
        ctx.strokeStyle = hsl(h, Math.min(80, opts.saturation * 100 + 30), 70, 0.05 * (opts.glowIntensity + 0.3));
        ctx.lineWidth = 14;
        ctx.stroke();
      }
    }

    function onMove(e) {
      const r = container.getBoundingClientRect();
      const ev = (e.touches && e.touches[0]) || e;
      mouse.x = ev.clientX - r.left;
      mouse.y = ev.clientY - r.top;
      mouse.active = true;
    }
    function onLeave() { mouse.active = false; mouse.x = mouse.y = -9999; }

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
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      },
      setOptions(newOpts) { Object.assign(opts, newOpts); }
    };
  }

  // Global
  window.initGalaxy = initGalaxy;
  window.GALAXY_DEFAULTS = DEFAULT_OPTS;
})();