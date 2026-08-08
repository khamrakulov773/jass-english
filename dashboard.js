/* ═══════ DASH PAGE SETUP ═══════ */

// 1. Init PAGE Galaxy with EXACT user params
(function initPageGalaxy(){
  if (window.initGalaxy){
    window.initGalaxy('#galaxyPage', {
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
    });
  }
})();

// 2. Hide landing shell from landing.js (it's bound to #landing, not present here)
document.addEventListener('DOMContentLoaded', function(){
  // If no currentUser → redirect back to index auth
  const cu = localStorage.getItem('currentUser');
  if (!cu){
    window.location.replace('index.html');
    return;
  }
  window.currentUser = JSON.parse(cu);

  // Ensure the user loads from allUsers too (original flow)
  window.allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');

  // Populate hero + header user info
  populateDashUser();

  // Init level cards (reveal + hover)
  if (typeof window.initLevelCards === 'function') window.initLevelCards();

  // Fix: landing.js only observes "#landing .reveal", but this page has no
  // #landing wrapper -> level cards / titles stayed invisible forever.
  initDashReveal();
});

function initDashReveal(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;
  if (prefersReduced || !('IntersectionObserver' in window)){
    revealEls.forEach(el => el.classList.add('in-view'));
    return;
  }
  revealEls.forEach((el, i) => el.style.setProperty('--d', i % 6));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
}

function populateDashUser(){
  const u = window.currentUser; if (!u) return;
  const name = u.nickname ? '@' + u.nickname : (u.name || 'Ученик');
  const level = (u.regInfo && u.regInfo.level) || 'A1';
  const track = (u.regInfo && u.regInfo.track) || 'english';
  const email = u.email || '';

  const LVL_DESC = {
    A1: 'Beginner — базовые слова и приветствия',
    A2: 'Elementary — быт и путешествия',
    B1: 'Intermediate — разговорная речь',
    B2: 'Upper-Intermediate — сложные темы',
    C1: 'Advanced — идиомы и академия',
    C2: 'Mastery — уровень носителя',
    starter: 'Starter — основы с нуля',
    junior: 'Junior — базовые алгоритмы',
    middle: 'Middle — ООП и проекты',
    senior: 'Senior — архитектура'
  };

  // Hero
  const hn = document.getElementById('dashHeroName');
  if (hn) hn.textContent = (u.name || name).split(' ')[0];

  // Header block
  const hb = document.getElementById('dashUserBlock');
  const ha = document.getElementById('dashAvatar');
  const hun = document.getElementById('dashUserName');
  const hus = document.getElementById('dashUserSub');
  if (hb) hb.style.display = 'flex';
  if (document.getElementById('dashEditBtn')) document.getElementById('dashEditBtn').style.display='inline-flex';
  if (document.getElementById('dashLogoutBtn')) document.getElementById('dashLogoutBtn').style.display='inline-flex';
  if (hun) hun.textContent = name;
  if (hus) hus.textContent = (track==='coding'?'Кодинг':'Английский') + ' · Уровень ' + level;
  if (ha){
    if (u.avatar) ha.innerHTML = `<img src="${u.avatar}" alt="">`;
    else ha.textContent = (u.name||'U').charAt(0).toUpperCase();
  }

  // Banner
  const bl = document.getElementById('dashCurrentLevel');
  const bd = document.getElementById('dashCurrentLevelDesc');
  if (bl) bl.textContent = level;
  if (bd) bd.textContent = LVL_DESC[level] || 'Индивидуальный курс';

  // Inline start level
  const il = document.getElementById('dashRegLevelInline');
  if (il) il.textContent = level;
  const startBtn = document.getElementById('dashStartRegLevel');
  if (startBtn){
    startBtn.onclick = function(e){ e.preventDefault(); openLevel(level); };
  }

  // Stats
  const studied = u.studiedWords ? Object.keys(u.studiedWords).length : 0;
  const quizzes = u.quizzesTaken || 0;
  const sw = document.getElementById('dashStatWords');
  const st = document.getElementById('dashStatTests');
  if (sw) animateCounter(sw, 0, studied, 900);
  if (st) animateCounter(st, 0, quizzes, 900);

  // Burger panel user
  const mu = document.getElementById('dashMenuUser');
  if (mu) mu.style.display = 'flex';
  const mav = document.getElementById('dashMenuAvatar');
  if (mav){ mav.innerHTML = u.avatar ? `<img src="${u.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : ((u.name||'U').charAt(0).toUpperCase()); }
  const mun = document.getElementById('dashMenuUserName');
  if (mun) mun.textContent = name;
  const mue = document.getElementById('dashMenuUserEmail');
  if (mue) mue.textContent = email;
  if (document.getElementById('dashMenuEdit')){
    document.getElementById('dashMenuEdit').onclick = function(e){ e.preventDefault(); if (typeof openEditProfile === 'function') openEditProfile(); };
  }
  if (document.getElementById('dashMenuLogout')){
    document.getElementById('dashMenuLogout').onclick = function(e){ e.preventDefault(); if (typeof logoutUser === 'function'){ logoutUser(); } else { localStorage.removeItem('currentUser'); window.location='index.html'; } };
  }
  if (document.getElementById('dashEditBtn')){
    document.getElementById('dashEditBtn').onclick = function(){ if (typeof openEditProfile === 'function') openEditProfile(); };
  }
  if (document.getElementById('dashLogoutBtn')){
    document.getElementById('dashLogoutBtn').onclick = function(){ if (typeof logoutUser === 'function') logoutUser(); };
  }
}

function animateCounter(el, from, to, dur){
  if (!el) return;
  const start = performance.now();
  function step(t){
    const p = Math.min(1, (t-start)/dur);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(from + (to-from)*eased).toLocaleString('ru-RU');
    if (p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* Burger logic */
function toggleDashMenu(){
  const p = document.getElementById('dashMenuPanel');
  const b = document.getElementById('dashBackdrop');
  const bg = document.getElementById('dashBurger');
  if (!p) return;
  const opened = p.classList.toggle('show');
  if (b) b.classList.toggle('show', opened);
  if (bg) bg.classList.toggle('open', opened);
  document.body.style.overflow = opened ? 'hidden' : '';
}
window.toggleDashMenu = toggleDashMenu;

/* Fix: the original openLevel() (from script.js) starts with
   document.getElementById('landing').classList.add('hidden') — but this
   page has no #landing element, so that line throws and the whole function
   stops right there. Even if it didn't, #app on this page is an EMPTY
   <div> (the real lesson UI — sidebar, vocab, grammar, tests — only exists
   inside #app on index.html). So instead of trying to open the lesson
   in-place here, send the user to index.html and open it there. */
window.openLevel = function(level){
  window.location.href = 'index.html?openLevel=' + encodeURIComponent(level);
};
/* Override backToLanding → restore shell */
const origBack = window.backToLanding || (window.goBackToLanding && window.goBackToLanding);
const backTargets = ['backToLanding','goBackToLanding'];
backTargets.forEach(k => {
  if (typeof window[k] === 'function'){
    const orig = window[k];
    window[k] = function(){
      const shell = document.querySelector('.dash-shell');
      if (shell) shell.style.display = '';
      const r = orig.apply(window, arguments);
      window.scrollTo({top: 0, behavior: 'smooth'});
      return r;
    };
  }
});
/* Also override logoutUser → go to index.html */
const origLogout = window.logoutUser;
if (origLogout){
  window.logoutUser = function(){
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
  };
}