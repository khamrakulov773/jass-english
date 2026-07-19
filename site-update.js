/* ═════════════════════════════════════════════════════════════
   SITE-UPDATE.JS
   Тест на уровень при нажатии "Начать бесплатно":
   выбор направления (английский / программирование) →
   короткий тест → результат с анимацией → CTA на регистрацию.
   Плюс логика паучка-талисмана.
   Ничего из script.js не переопределяет, только использует
   уже существующие LEVELS, showAuthScreen, switchAuthTab, showLanding.
   ═════════════════════════════════════════════════════════════ */

/* ═════════════════════════════════════════════════════════════
   AUTH CARD: заголовок/подзаголовок под активную вкладку
   + подключение Google Sign-In (Google Identity Services).
   ═════════════════════════════════════════════════════════════ */

/* ---------- ВАЖНО: чтобы кнопка Google реально авторизовывала людей,
   впишите сюда свой Client ID из Google Cloud Console → APIs & Services →
   Credentials → OAuth 2.0 Client IDs (тип "Web application", с вашим
   доменом в Authorized JavaScript origins). Без этого кнопка покажет
   сообщение, что вход через Google ещё не настроен. ---------- */
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

const _origSwitchAuthTab = window.switchAuthTab;
window.switchAuthTab = function (tab) {
  if (typeof _origSwitchAuthTab === 'function') _origSwitchAuthTab(tab);
  const heading = document.getElementById('authHeading');
  const subtitle = document.getElementById('authSubtitle');
  if (!heading || !subtitle) return;
  if (tab === 'login') {
    heading.textContent = 'Вход в аккаунт';
    subtitle.textContent = 'Войдите, чтобы открыть профиль и продолжить обучение.';
  } else {
    heading.textContent = 'Создать аккаунт';
    subtitle.textContent = 'Регистрация занимает меньше минуты — начните учиться прямо сейчас.';
  }
};

let googleAuthReady = false;
function initGoogleAuth() {
  if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) return;
  if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID.startsWith('YOUR_')) return;
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredential,
    auto_select: false
  });
  googleAuthReady = true;
}
window.addEventListener('load', () => setTimeout(initGoogleAuth, 300));

function activeAuthMessageEl() {
  const registerHidden = document.getElementById('register-form').classList.contains('hidden');
  return document.getElementById(registerHidden ? 'login-message' : 'register-message');
}

function handleGoogleAuthClick() {
  if (!googleAuthReady) {
    const msg = activeAuthMessageEl();
    if (msg) {
      msg.textContent = 'Вход через Google ещё не подключён: добавьте свой Client ID в site-update.js.';
      msg.className = 'auth-message error';
    }
    return;
  }
  google.accounts.id.prompt();
}

async function handleGoogleCredential(response) {
  try {
    const payload = JSON.parse(atob(response.credential.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
    const email = payload.email;
    const firstName = payload.given_name || payload.name || 'Пользователь';
    const lastName = payload.family_name || '';
    const pseudoPassword = 'google-oauth-' + payload.sub;

    let result = typeof loginUser === 'function' ? loginUser(email, pseudoPassword) : { success: false };
    if (!result.success && typeof registerUser === 'function') {
      result = await registerUser(email, pseudoPassword, firstName, lastName);
    }
    const msg = activeAuthMessageEl();
    if (result && result.success) {
      if (msg) { msg.textContent = result.message || 'Готово!'; msg.className = 'auth-message success'; }
      setTimeout(() => { if (typeof showLanding === 'function') showLanding(); }, 600);
    } else if (msg) {
      msg.textContent = (result && result.message) || 'Не удалось войти через Google.';
      msg.className = 'auth-message error';
    }
  } catch (e) {
    console.error('Google auth error:', e);
  }
}

/* ---------- банк вопросов: программирование (фиксированный) ---------- */
const PROGRAMMING_QUESTIONS = [
  { q: "Какой тег создаёт заголовок самого высокого уровня в HTML?", options: ["<h1>", "<head>", "<title>", "<top>"], a: 0 },
  { q: "Как объявить переменную в современном JavaScript?", options: ["var/let/const", "int x", "dim x", "var:x"], a: 0 },
  { q: "Что делает CSS-свойство display:none?", options: ["Скрывает элемент полностью", "Делает текст прозрачным", "Меняет цвет фона", "Удаляет элемент из HTML-файла"], a: 0 },
  { q: "Какой оператор используется для строгого сравнения в JS?", options: ["===", "=", "==", "<>"], a: 0 },
  { q: "Что вернёт [1,2,3].length?", options: ["3", "2", "1", "undefined"], a: 0 },
  { q: "Как называется структура «если — иначе» в программировании?", options: ["Условный оператор", "Цикл", "Массив", "Функция"], a: 0 },
  { q: "Какой символ используется для комментария в одной строке JS?", options: ["//", "#", "<!-- -->", "**"], a: 0 },
  { q: "Что такое функция в программировании?", options: ["Именованный блок кода, который можно вызывать", "Тип данных", "CSS-класс", "База данных"], a: 0 },
  { q: "Какой тег подключает CSS-файл в HTML?", options: ["<link>", "<style src>", "<css>", "<script>"], a: 0 },
  { q: "Что делает цикл for?", options: ["Повторяет блок кода заданное число раз", "Останавливает программу", "Создаёт переменную", "Открывает файл"], a: 0 },
];

let placementState = { type: null, questions: [], idx: 0, correct: 0, wrong: 0, locked: false };

/* ---------- открыть / закрыть модалку ---------- */
function openPlacementModal(preselect) {
  document.getElementById('placement-modal').classList.remove('hidden');
  resetPlacementSteps();
  document.getElementById('placement-step-choice').classList.remove('hidden');
  if (preselect) {
    // небольшой акцент на нужной карточке, но выбор остаётся за пользователем
    setTimeout(() => {
      const cards = document.querySelectorAll('.placement-choice-card');
      if (cards[1]) cards[1].style.borderColor = 'var(--accent)';
    }, 50);
  }
}
function closePlacementModal() {
  document.getElementById('placement-modal').classList.add('hidden');
}
function resetPlacementSteps() {
  ['placement-step-choice', 'placement-step-quiz', 'placement-step-result'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
}

/* ---------- построение вопросов по английскому из уже существующих LEVELS ---------- */
function buildEnglishQuestions() {
  const order = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const questions = [];
  if (typeof LEVELS !== 'object' || !LEVELS) return questions;

  order.forEach(lvl => {
    const levelData = LEVELS[lvl];
    if (!levelData || !levelData.vocab) return;
    const allWords = [];
    Object.keys(levelData.vocab).forEach(topic => {
      levelData.vocab[topic].forEach(w => allWords.push(w));
    });
    if (allWords.length < 4) return;
    const shuffled = allWords.slice().sort(() => Math.random() - 0.5).slice(0, 2);
    shuffled.forEach(word => {
      const distractors = allWords.filter(w => w.ru !== word.ru).sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ru);
      const options = [word.ru, ...distractors].sort(() => Math.random() - 0.5);
      questions.push({
        q: `Как переводится слово "${word.en}"?`,
        options,
        a: options.indexOf(word.ru),
        level: lvl
      });
    });
  });
  return questions;
}

/* ---------- старт теста ---------- */
function startPlacementTest(type) {
  placementState = { type, questions: [], idx: 0, correct: 0, wrong: 0, locked: false };
  placementState.questions = type === 'programming'
    ? PROGRAMMING_QUESTIONS.slice()
    : buildEnglishQuestions();

  if (!placementState.questions.length) {
    placementState.questions = PROGRAMMING_QUESTIONS.slice();
  }

  resetPlacementSteps();
  document.getElementById('placement-step-quiz').classList.remove('hidden');
  renderPlacementQuestion();
}

function renderPlacementQuestion() {
  const st = placementState;
  const total = st.questions.length;
  const q = st.questions[st.idx];
  st.locked = false;

  document.getElementById('placementQCounter').textContent = `Вопрос ${st.idx + 1} из ${total}`;
  document.getElementById('placementProgressBar').style.width = `${(st.idx / total) * 100}%`;
  document.getElementById('placementQuestion').textContent = q.q;

  const optWrap = document.getElementById('placementOptions');
  optWrap.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'placement-opt';
    btn.textContent = opt;
    btn.onclick = () => selectPlacementOption(i);
    optWrap.appendChild(btn);
  });
}

function selectPlacementOption(i) {
  const st = placementState;
  if (st.locked) return;
  st.locked = true;
  const q = st.questions[st.idx];
  const buttons = document.querySelectorAll('#placementOptions .placement-opt');
  buttons.forEach((b, idx) => {
    b.disabled = true;
    if (idx === q.a) b.classList.add('correct');
    else if (idx === i && i !== q.a) b.classList.add('wrong');
  });

  if (i === q.a) st.correct++;
  else st.wrong++;

  setTimeout(() => {
    st.idx++;
    if (st.idx < st.questions.length) {
      renderPlacementQuestion();
    } else {
      document.getElementById('placementProgressBar').style.width = '100%';
      finishPlacementTest();
    }
  }, 700);
}

/* ---------- определение уровня по результату ---------- */
function determinePlacementLevel() {
  const st = placementState;
  const total = st.questions.length;
  const ratio = st.correct / total;

  if (st.type === 'programming') {
    if (ratio >= 0.8) return { badge: 'PRO', title: 'Отличный старт!', desc: 'Ты уже уверенно ориентируешься в основах программирования.' };
    if (ratio >= 0.5) return { badge: 'MID', title: 'Хорошая база!', desc: 'Базовые понятия знакомы — курс поможет закрепить и пойти дальше.' };
    return { badge: 'START', title: 'Отличная точка старта!', desc: 'Курс программирования на платформе построен как раз с самых основ.' };
  }

  // английский — считаем по самому высокому уровню, где было верно большинство вопросов
  const byLevel = {};
  st.questions.forEach((q, idx) => {
    if (!q.level) return;
    byLevel[q.level] = byLevel[q.level] || { correct: 0, total: 0 };
    byLevel[q.level].total++;
  });
  // пересчитать корректные ответы по уровням понадобится отдельный проход,
  // поэтому используем упрощённую шкалу по общему числу верных ответов
  const order = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const idx = Math.min(order.length - 1, Math.max(0, Math.round(ratio * (order.length - 1))));
  const level = order[idx];
  const descriptions = {
    A1: 'Ты в начале пути — платформа поможет выучить первые слова и фразы.',
    A2: 'Базовые темы уже знакомы — пора расширять словарный запас.',
    B1: 'Уверенный средний уровень — можно вести простые разговоры.',
    B2: 'Хороший разговорный уровень — самое время шлифовать грамматику.',
    C1: 'Продвинутый уровень — фокус на нюансах и беглости речи.',
    C2: 'Уровень, близкий к носителю языка — впечатляющий результат!'
  };
  return { badge: level, title: `Твой уровень — ${level}!`, desc: descriptions[level] };
}

/* ---------- экран результата с анимацией ---------- */
function finishPlacementTest() {
  const st = placementState;
  resetPlacementSteps();
  document.getElementById('placement-step-result').classList.remove('hidden');

  const result = determinePlacementLevel();
  document.getElementById('placementResultBadge').textContent = result.badge;
  document.getElementById('placementResultTitle').textContent = result.title;
  document.getElementById('placementResultDesc').textContent = result.desc;

  animateCountUp('placementCorrectNum', st.correct);
  animateCountUp('placementWrongNum', st.wrong);
  launchConfetti();
}

function animateCountUp(elId, target) {
  const el = document.getElementById(elId);
  if (!el) return;
  const duration = 700;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function launchConfetti() {
  const wrap = document.getElementById('placementConfetti');
  if (!wrap) return;
  wrap.innerHTML = '';
  const colors = ['var(--accent)', 'var(--teal)', 'var(--purple)', 'var(--green)', 'var(--yellow)'];
  for (let i = 0; i < 26; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (1.1 + Math.random() * 0.9) + 's';
    piece.style.animationDelay = (Math.random() * 0.3) + 's';
    wrap.appendChild(piece);
  }
}

/* ---------- действия после результата ---------- */
function placementReturnToSite() {
  closePlacementModal();
  if (typeof showLanding === 'function') showLanding();
}
function placementGoRegister() {
  closePlacementModal();
  if (typeof switchAuthTab === 'function') switchAuthTab('register');
  if (typeof showAuthScreen === 'function') showAuthScreen();
}

/* ---------- паучок-талисман ---------- */
function siteSpiderRetract() {
  const el = document.getElementById('siteSpider');
  if (!el) return;
  el.classList.toggle('retracted');
}