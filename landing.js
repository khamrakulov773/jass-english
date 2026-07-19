/* ═════════════════════════════════════════════════════════════
   LANDING.JS — анимации и интерактив нового лендинга.
   Загружается последним, использует LEVELS/goto из script.js,
   если они уже определены, но не ломается, если их нет.
   ═════════════════════════════════════════════════════════════ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- helper: собрать все слова из LEVELS ---------- */
function collectAllWords() {
  const words = [];
  if (typeof LEVELS === 'object' && LEVELS) {
    Object.keys(LEVELS).forEach(lvl => {
      const vocab = LEVELS[lvl] && LEVELS[lvl].vocab;
      if (!vocab) return;
      Object.keys(vocab).forEach(topic => {
        vocab[topic].forEach(item => words.push(item));
      });
    });
  }
  return words;
}

/* ---------- mobile nav ---------- */
window.toggleLandingNav = function () {
  const nav = document.getElementById('lpMobileNav');
  const burger = document.getElementById('lpBurger');
  if (!nav || !burger) return;
  nav.classList.toggle('open');
  burger.classList.toggle('open');
};
window.closeLandingNav = function () {
  const nav = document.getElementById('lpMobileNav');
  const burger = document.getElementById('lpBurger');
  if (!nav || !burger) return;
  nav.classList.remove('open');
  burger.classList.remove('open');
};

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- sticky header shadow ---------- */
  const header = document.getElementById('landingHeader');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('#landing .reveal');
  if (revealEls.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('in-view'));
    } else {
      revealEls.forEach((el, i) => el.style.setProperty('--d', i % 6));
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => io.observe(el));
    }
  }

  /* ---------- active nav link on scroll ---------- */
  const navLinks = document.querySelectorAll('#landing .header-nav .nav-link');
  const sections = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const linkFor = (id) => document.querySelector(`#landing .header-nav .nav-link[href="#${id}"]`);
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = linkFor(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active-link'));
          link.classList.add('active-link');
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach(sec => navObserver.observe(sec));
  }

  /* ---------- counters ---------- */
  const statsWrap = document.getElementById('heroStats');
  if (statsWrap) {
    const words = collectAllWords();
    const nums = statsWrap.querySelectorAll('.hero-stat-num');
    const runCounters = () => {
      nums.forEach(num => {
        let target = parseInt(num.getAttribute('data-count'), 10) || 0;
        if (num.getAttribute('data-source') === 'words' && words.length) {
          target = words.length;
        }
        if (prefersReducedMotion) { num.textContent = target.toLocaleString('ru-RU') + '+'; return; }
        const duration = 1100;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          num.textContent = Math.round(eased * target).toLocaleString('ru-RU') + (p >= 1 ? '+' : '');
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    };
    if ('IntersectionObserver' in window) {
      const cObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { runCounters(); obs.disconnect(); }
        });
      }, { threshold: 0.4 });
      cObserver.observe(statsWrap);
    } else {
      runCounters();
    }
  }

  /* ---------- hero terminal typing rotator ---------- */
  const hvTextEn = document.getElementById('hvTextEn');
  const hvTextRu = document.getElementById('hvTextRu');
  if (hvTextEn && hvTextRu) {
    const fallback = [
      { en: 'practice', ru: 'практика' },
      { en: 'confidence', ru: 'уверенность' },
      { en: 'fluency', ru: 'беглость речи' },
      { en: 'progress', ru: 'прогресс' }
    ];
    const pool = collectAllWords().filter(w => w.en && w.en.length <= 16);
    const source = pool.length >= 6 ? pool : fallback;

    if (prefersReducedMotion) {
      const w = source[0];
      hvTextEn.textContent = w.en;
      hvTextRu.textContent = '→ ' + w.ru;
    } else {
      let idx = 0;
      const pickWord = () => source[Math.floor(Math.random() * source.length)];
      const typeLoop = () => {
        const word = pickWord();
        const text = word.en;
        let i = 0;
        hvTextEn.textContent = '';
        hvTextRu.textContent = '';
        const typeChar = () => {
          if (i <= text.length) {
            hvTextEn.textContent = text.slice(0, i);
            i++;
            setTimeout(typeChar, 65);
          } else {
            hvTextRu.textContent = '→ ' + word.ru;
            setTimeout(eraseChar, 1600);
          }
        };
        const eraseChar = () => {
          if (i >= 0) {
            hvTextEn.textContent = text.slice(0, i);
            i--;
            setTimeout(eraseChar, 30);
          } else {
            hvTextRu.textContent = '';
            setTimeout(typeLoop, 300);
          }
        };
        typeChar();
      };
      typeLoop();
    }
  }

  /* ---------- marquee ---------- */
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (marqueeTrack) {
    const words = collectAllWords();
    let labels;
    if (words.length >= 10) {
      const shuffled = words.slice().sort(() => Math.random() - 0.5).slice(0, 14);
      labels = shuffled.map(w => `${w.en} — ${w.ru}`);
    } else {
      labels = ['Vocabulary', 'Grammar', 'Listening', 'Speaking', 'Pronunciation', 'Idioms', 'Fluency', 'Confidence', 'Practice', 'Progress'];
    }
    const buildTrack = (arr) => arr.map(t => `<span class="mq-item"><i class="fas fa-circle"></i>${t}</span>`).join('');
    marqueeTrack.innerHTML = buildTrack(labels) + buildTrack(labels);
  }

  /* ---------- programming teaser: floating code particles ---------- */
  const particlesWrap = document.querySelector('.coding-particles');
  if (particlesWrap && !prefersReducedMotion) {
    const symbols = ['{ }', '</>', 'const', 'if()', '=>', 'print()', '[ ]', 'def', 'class', '&&', '01', '#!'];
    const count = window.innerWidth < 640 ? 8 : 16;
    for (let i = 0; i < count; i++) {
      const span = document.createElement('span');
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      span.style.left = Math.random() * 100 + '%';
      span.style.animationDuration = (10 + Math.random() * 10) + 's';
      span.style.animationDelay = (Math.random() * 10) + 's';
      span.style.fontSize = (12 + Math.random() * 10) + 'px';
      particlesWrap.appendChild(span);
    }
  }

  /* ---------- close mobile nav on outside click ---------- */
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('lpMobileNav');
    const burger = document.getElementById('lpBurger');
    if (!nav || !nav.classList.contains('open')) return;
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      window.closeLandingNav();
    }
  });
});