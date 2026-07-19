/* ═════════════════════════════════════════════════════════════
   EXT-SCRIPT.JS — логика новых разделов сайта:
   Молочная тема · Глаголы (irregular/regular) · Listening · Speaking · Программирование
   Подключается ПОСЛЕ script.js, использует уже существующие
   переменные currentLevel, LEVELS, функцию speak() и goto().
   ═════════════════════════════════════════════════════════════ */

/* ---------- расширяем goto(), не трогая оригинал ---------- */
const _origGoto = window.goto;
window.goto = function(section) {
  const extSections = ['irregular', 'regular', 'listening', 'speaking'];
  if (extSections.includes(section)) {
    currentSection = section;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`[onclick="goto('${section}')"]`);
    if (btn) btn.classList.add('active');
    document.querySelectorAll('#app .page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(`page-${section}`);
    if (page) page.classList.add('active');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('backdrop');
    const mbtn = document.getElementById('menu-toggle-btn');
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      backdrop.classList.remove('open');
      if (mbtn) mbtn.classList.remove('open');
    }
    switch (section) {
      case 'irregular': renderVerbForms('irregular'); break;
      case 'regular': renderVerbForms('regular'); break;
      case 'listening': renderListening(); break;
      case 'speaking': renderSpeaking(); break;
    }
    return;
  }
  _origGoto(section);
};

/* ---------- 2. НЕПРАВИЛЬНЫЕ / ПРАВИЛЬНЫЕ ГЛАГОЛЫ ---------- */
function renderVerbForms(kind) {
  const list = kind === 'irregular' ? IRREGULAR_VERBS : REGULAR_VERBS;
  const wrap = document.getElementById(kind + 'VerbsWrap');
  if (!wrap) return;
  const lvl = currentLevel;
  const filtered = list.filter(v => v.level === lvl);
  let html = `<div class="tbl-wrap"><table class="vtbl"><thead><tr>
    <th>Base (V1)</th><th>Past (V2)</th><th>Participle (V3)</th><th>Перевод</th><th>🔊</th>
  </tr></thead><tbody>`;
  if (filtered.length === 0) {
    html += `<tr><td colspan="5" style="text-align:center;color:var(--text3)">Для уровня ${lvl} пока нет данных</td></tr>`;
  }
  filtered.forEach(v => {
    html += `<tr>
      <td class="v-en">${v.base}</td>
      <td>${v.past}</td>
      <td>${v.part}</td>
      <td>${v.ru}</td>
      <td><button class="sp-btn" onclick="speak('${v.base.replace(/'/g, "\\'")}')">🔊</button></td>
    </tr>`;
  });
  html += `</tbody></table></div>`;
  wrap.innerHTML = html;
}

/* ---------- 3. LISTENING (Task 5) ---------- */
let listeningAnswers = {};
function renderListening() {
  const lvl = currentLevel;
  const data = LISTENING[lvl];
  const pillsWrap = document.getElementById('listenLevelPills');
  if (pillsWrap) {
    pillsWrap.innerHTML = Object.keys(LISTENING).map(l =>
      `<button class="pill ${l === lvl ? 'active' : ''}" onclick="switchListenLevel('${l}')" style="${l === lvl ? 'background:var(--accent);color:#fff' : ''}">${l}</button>`
    ).join('');
  }
  const wrap = document.getElementById('listeningWrap');
  if (!wrap || !data) return;
  listeningAnswers = {};
  let html = `
    <div class="listen-card">
      <div class="listen-title">🎧 ${data.title}</div>
      <div class="listen-controls">
        <button class="btn" onclick="playListening()">▶️ Прослушать текст</button>
        <button class="btn" style="background:var(--text2)" onclick="showListenText()">📄 Показать текст</button>
      </div>
      <div id="listenTextBox" class="listen-text hidden">${data.text}</div>
      <div class="listen-tasks">`;
  data.tasks.forEach((t, i) => {
    html += `<div class="listen-q">
      <div class="listen-q-title">Task 5.${i + 1}. ${t.q}</div>
      <div class="listen-options">`;
    t.options.forEach((opt, oi) => {
      html += `<button class="listen-opt" id="lopt-${i}-${oi}" onclick="pickListenAnswer(${i},${oi})">${opt}</button>`;
    });
    html += `</div></div>`;
  });
  html += `</div>
      <button class="btn save-btn" style="width:100%;margin-top:14px" onclick="checkListening()">✅ Проверить</button>
      <div id="listenResult" class="listen-result"></div>
    </div>`;
  wrap.innerHTML = html;
}
function switchListenLevel(l) {
  currentLevel = l;
  renderListening();
}
function playListening() {
  const data = LISTENING[currentLevel];
  if (data) speak(data.text);
}
function showListenText() {
  const box = document.getElementById('listenTextBox');
  if (box) box.classList.toggle('hidden');
}
function pickListenAnswer(qi, oi) {
  listeningAnswers[qi] = oi;
  const data = LISTENING[currentLevel];
  data.tasks[qi].options.forEach((_, x) => {
    document.getElementById(`lopt-${qi}-${x}`).classList.remove('picked');
  });
  document.getElementById(`lopt-${qi}-${oi}`).classList.add('picked');
}
function checkListening() {
  const data = LISTENING[currentLevel];
  let correct = 0;
  data.tasks.forEach((t, i) => {
    t.options.forEach((_, x) => {
      const el = document.getElementById(`lopt-${i}-${x}`);
      el.classList.remove('correct', 'wrong');
      if (x === t.a) el.classList.add('correct');
      else if (listeningAnswers[i] === x) el.classList.add('wrong');
    });
    if (listeningAnswers[i] === t.a) correct++;
  });
  const res = document.getElementById('listenResult');
  res.innerHTML = `Результат: <b>${correct} / ${data.tasks.length}</b> правильных ответов`;
}

/* ---------- 4. SPEAKING (Task 3) — Web Speech API ---------- */
let speakRecognition = null;
let speakActiveIdx = null;
function renderSpeaking() {
  const lvl = currentLevel;
  const phrases = SPEAKING[lvl] || [];
  const pillsWrap = document.getElementById('speakLevelPills');
  if (pillsWrap) {
    pillsWrap.innerHTML = Object.keys(SPEAKING).map(l =>
      `<button class="pill ${l === lvl ? 'active' : ''}" onclick="switchSpeakLevel('${l}')" style="${l === lvl ? 'background:var(--accent);color:#fff' : ''}">${l}</button>`
    ).join('');
  }
  const wrap = document.getElementById('speakingWrap');
  if (!wrap) return;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    wrap.innerHTML = `<div class="listen-card"><p style="color:var(--red)">⚠️ Ваш браузер не поддерживает распознавание речи. Попробуйте Google Chrome.</p></div>`;
    return;
  }
  let html = '';
  phrases.forEach((phrase, i) => {
    html += `
      <div class="speak-card">
        <div class="speak-q-title">Task 3.${i + 1}</div>
        <div class="speak-phrase">${phrase}</div>
        <div class="speak-controls">
          <button class="btn" onclick="speak('${phrase.replace(/'/g, "\\'")}')">🔊 Пример</button>
          <button class="btn record-btn" id="rec-btn-${i}" onclick="startRecording(${i}, '${phrase.replace(/'/g, "\\'")}')">🎤 Говорить</button>
        </div>
        <div id="speak-result-${i}" class="speak-result"></div>
      </div>`;
  });
  wrap.innerHTML = html;
}
function switchSpeakLevel(l) {
  currentLevel = l;
  renderSpeaking();
}
function startRecording(idx, targetPhrase) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return;
  if (speakRecognition) { try { speakRecognition.stop(); } catch (e) {} }
  speakActiveIdx = idx;
  const btn = document.getElementById(`rec-btn-${idx}`);
  const resBox = document.getElementById(`speak-result-${idx}`);
  resBox.innerHTML = `<span style="color:var(--accent)">🎙️ Слушаю... говорите фразу</span>`;
  btn.classList.add('recording');
  speakRecognition = new SR();
  speakRecognition.lang = 'en-US';
  speakRecognition.interimResults = false;
  speakRecognition.maxAlternatives = 1;
  speakRecognition.onresult = (e) => {
    const said = e.results[0][0].transcript;
    gradeSpeaking(idx, targetPhrase, said);
  };
  speakRecognition.onerror = (e) => {
    resBox.innerHTML = `<span style="color:var(--red)">Ошибка распознавания: ${e.error}. Проверьте доступ к микрофону.</span>`;
    btn.classList.remove('recording');
  };
  speakRecognition.onend = () => {
    btn.classList.remove('recording');
  };
  try { speakRecognition.start(); } catch (e) {}
}
function normalizeSpeechWord(w) {
  return w.toLowerCase().replace(/[^a-z']/g, '');
}
function gradeSpeaking(idx, target, said) {
  const resBox = document.getElementById(`speak-result-${idx}`);
  const targetWords = target.split(/\s+/).map(normalizeSpeechWord).filter(Boolean);
  const saidWords = said.split(/\s+/).map(normalizeSpeechWord).filter(Boolean);
  let correctCount = 0;
  const markedTarget = targetWords.map((w, i) => {
    const ok = saidWords.includes(w);
    if (ok) correctCount++;
    return `<span class="${ok ? 'sp-word-ok' : 'sp-word-bad'}">${target.split(/\s+/)[i]}</span>`;
  }).join(' ');
  const score = Math.round((correctCount / targetWords.length) * 100);
  let verdict, cls;
  if (score >= 90) { verdict = '🎉 Отлично! Произношение верное.'; cls = 'ok'; }
  else if (score >= 60) { verdict = '👍 Неплохо, но есть ошибки в произношении.'; cls = 'mid'; }
  else { verdict = '❌ Много ошибок в произношении, попробуйте ещё раз.'; cls = 'bad'; }
  resBox.innerHTML = `
    <div class="sp-heard">Распознано: <i>"${said}"</i></div>
    <div class="sp-marked">${markedTarget}</div>
    <div class="sp-verdict sp-verdict-${cls}">${verdict} (${score}%)</div>`;
}