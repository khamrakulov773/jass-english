// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "k5wqyuxPlo61XOSqe";
const EMAILJS_SERVICE_ID = "service_surfsxr";
const EMAILJS_TEMPLATE_ID = "template_h16sx1t";
const EMAILJS_ADMIN_TEMPLATE_ID = "template_utz9l08";
const ADMIN_EMAIL = "jasss.school773@gmail.com";

// ── User state ────────────────────────────────────────────
window.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
window.allUsers    = JSON.parse(localStorage.getItem('allUsers')    || '[]');
let currentUser = window.currentUser;
let allUsers    = window.allUsers;
window.currentAvatar = null;

// ── Image editor state ────────────────────────────────────
let editorImage    = null;
let editorRotation = 0;
let isCameraMode   = false;
// 'register' или 'edit' — кто открыл редактор
let editorContext  = 'register';

// ═══════════════════════════════════════════════════════════
//  КАМЕРА  (РЕГИСТРАЦИЯ)
// ═══════════════════════════════════════════════════════════
async function startCamera() {
  editorContext = 'register';
  isCameraMode  = true;
  const modal      = document.getElementById('image-editor-modal');
  const video      = document.getElementById('camera-video');
  const canvas     = document.getElementById('editor-canvas');
  const captureBtn = document.getElementById('camera-capture-btn');
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }
    });
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      canvas.classList.add('hidden');
      video.classList.remove('hidden');
      captureBtn.style.display = 'inline-block';
      captureBtn.onclick = captureFromCamera;
      modal.classList.remove('hidden');
    };
  } catch (err) {
    alert('Не удалось получить доступ к камере');
    console.error(err);
  }
}

function captureFromCamera() {
  const video      = document.getElementById('camera-video');
  const canvas     = document.getElementById('editor-canvas');
  const ctx        = canvas.getContext('2d');
  const captureBtn = document.getElementById('camera-capture-btn');

  const stream = video.srcObject;
  if (stream) stream.getTracks().forEach(t => t.stop());

  const size = Math.min(video.videoWidth, video.videoHeight);
  const x = (video.videoWidth  - size) / 2;
  const y = (video.videoHeight - size) / 2;

  canvas.width  = size;
  canvas.height = size;
  ctx.drawImage(video, x, y, size, size, 0, 0, size, size);

  const maxSize   = 400;
  const finalSize = Math.min(size, maxSize);
  const tmp = document.createElement('canvas');
  tmp.width = tmp.height = finalSize;
  tmp.getContext('2d').drawImage(canvas, 0, 0, size, size, 0, 0, finalSize, finalSize);

  editorImage = new Image();
  editorImage.onload = () => {
    canvas.width  = finalSize;
    canvas.height = finalSize;
    isCameraMode  = false;
    video.classList.add('hidden');
    canvas.classList.remove('hidden');
    captureBtn.style.display = 'none';
    editorRotation = 0;
    drawEditorImage();
  };
  editorImage.src = tmp.toDataURL();
}

// ═══════════════════════════════════════════════════════════
//  КАМЕРА  (РЕДАКТИРОВАНИЕ ПРОФИЛЯ)
// ═══════════════════════════════════════════════════════════
function startEditCamera() {
  editorContext = 'edit';
  isCameraMode  = true;
  const modal      = document.getElementById('image-editor-modal');
  const video      = document.getElementById('camera-video');
  const canvas     = document.getElementById('editor-canvas');
  const captureBtn = document.getElementById('camera-capture-btn');

  navigator.mediaDevices.getUserMedia({
    video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }
  }).then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      canvas.classList.add('hidden');
      video.classList.remove('hidden');
      captureBtn.style.display = 'inline-flex';
      captureBtn.onclick = captureEditCamera;
      document.getElementById('edit-profile-modal').classList.add('hidden');
      modal.classList.remove('hidden');
    };
  }).catch(err => {
    alert('Не удалось получить доступ к камере');
    console.error(err);
  });
}

function captureEditCamera() {
  const video      = document.getElementById('camera-video');
  const canvas     = document.getElementById('editor-canvas');
  const ctx        = canvas.getContext('2d');
  const captureBtn = document.getElementById('camera-capture-btn');

  const stream = video.srcObject;
  if (stream) stream.getTracks().forEach(t => t.stop());

  const size = Math.min(video.videoWidth, video.videoHeight);
  const x = (video.videoWidth  - size) / 2;
  const y = (video.videoHeight - size) / 2;

  canvas.width  = size;
  canvas.height = size;
  ctx.drawImage(video, x, y, size, size, 0, 0, size, size);

  const maxSize   = 400;
  const finalSize = Math.min(size, maxSize);
  const tmp = document.createElement('canvas');
  tmp.width = tmp.height = finalSize;
  tmp.getContext('2d').drawImage(canvas, 0, 0, size, size, 0, 0, finalSize, finalSize);

  editorImage = new Image();
  editorImage.onload = () => {
    canvas.width  = finalSize;
    canvas.height = finalSize;
    isCameraMode  = false;
    video.classList.add('hidden');
    canvas.classList.remove('hidden');
    captureBtn.style.display = 'none';
    editorRotation = 0;
    drawEditorImage();
  };
  editorImage.src = tmp.toDataURL();
}

// ═══════════════════════════════════════════════════════════
//  РЕДАКТОР ИЗОБРАЖЕНИЯ
// ═══════════════════════════════════════════════════════════
function openImageEditor(imageData) {
  editorContext = 'register';
  _openEditorWithImage(imageData);
}

function openEditImageEditor(imageData) {
  editorContext = 'edit';
  document.getElementById('edit-profile-modal').classList.add('hidden');
  _openEditorWithImage(imageData);
}

function _openEditorWithImage(imageData) {
  const modal      = document.getElementById('image-editor-modal');
  const canvas     = document.getElementById('editor-canvas');
  const video      = document.getElementById('camera-video');
  const captureBtn = document.getElementById('camera-capture-btn');

  isCameraMode   = false;
  editorRotation = 0;
  video.classList.add('hidden');
  canvas.classList.remove('hidden');
  captureBtn.style.display = 'none';

  editorImage = new Image();
  editorImage.onload = () => {
    const size = Math.min(editorImage.width, editorImage.height);
    const x    = (editorImage.width  - size) / 2;
    const y    = (editorImage.height - size) / 2;

    const tmp = document.createElement('canvas');
    tmp.width = tmp.height = size;
    tmp.getContext('2d').drawImage(editorImage, x, y, size, size, 0, 0, size, size);

    const maxSize   = 400;
    const finalSize = Math.min(size, maxSize);
    canvas.width  = finalSize;
    canvas.height = finalSize;

    editorImage = new Image();
    editorImage.onload = () => { drawEditorImage(); modal.classList.remove('hidden'); };
    editorImage.src = tmp.toDataURL();
  };
  editorImage.src = imageData;
}

function closeImageEditor() {
  const video = document.getElementById('camera-video');
  const stream = video.srcObject;
  if (stream) stream.getTracks().forEach(t => t.stop());
  document.getElementById('image-editor-modal').classList.add('hidden');
}

function drawEditorImage() {
  const canvas = document.getElementById('editor-canvas');
  const ctx    = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((editorRotation * Math.PI) / 180);
  ctx.drawImage(editorImage, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  ctx.restore();
}

function rotateImage(degrees) {
  editorRotation += degrees;
  if (Math.abs(editorRotation % 180) === 90) {
    const canvas = document.getElementById('editor-canvas');
    const tmp = canvas.width;
    canvas.width  = canvas.height;
    canvas.height = tmp;
  }
  drawEditorImage();
}

// ✅ ЕДИНАЯ КНОПКА «СОХРАНИТЬ» — работает для обоих контекстов
function saveEditedImage() {
  const canvas    = document.getElementById('editor-canvas');
  const imageData = canvas.toDataURL('image/png');

  if (editorContext === 'edit') {
    // Редактирование профиля
    editAvatar = imageData;
    closeImageEditor();
    openEditProfile();
  } else {
    // Регистрация
    window.currentAvatar = imageData;
    const preview = document.getElementById('register-avatar-preview');
    if (preview) {
      preview.innerHTML = `<img src="${imageData}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
    }
    closeImageEditor();
  }
}

// Совместимость со старым кодом
function saveEditImage() { saveEditedImage(); }

// Глобальный экспорт редактора
window.openImageEditor     = openImageEditor;
window.openEditImageEditor = openEditImageEditor;
window.closeImageEditor    = closeImageEditor;
window.rotateImage         = rotateImage;
window.saveEditedImage     = saveEditedImage;
window.saveEditImage       = saveEditImage;
window.startCamera         = startCamera;
window.captureFromCamera   = captureFromCamera;
window.startEditCamera     = startEditCamera;
window.captureEditCamera   = captureEditCamera;

// ═══════════════════════════════════════════════════════════
//  ИНИЦИАЛИЗАЦИЯ (слушатели файловых инпутов)
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  if (EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  // Галерея → регистрация
  const avatarInput = document.getElementById('register-avatar');
  if (avatarInput) {
    avatarInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = ev => openImageEditor(ev.target.result);
        reader.readAsDataURL(file);
      }
      e.target.value = '';
    });
  }

  // Галерея → редактирование профиля
  const editAvatarInput = document.getElementById('edit-avatar');
  if (editAvatarInput) {
    editAvatarInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = ev => openEditImageEditor(ev.target.result);
        reader.readAsDataURL(file);
      }
      e.target.value = '';
    });
  }
});

// ═══════════════════════════════════════════════════════════
//  АВТОРИЗАЦИЯ
// ═══════════════════════════════════════════════════════════

// Регистрация нового пользователя
async function registerUser(email, password, name, nickname) {
  const existingUser = allUsers.find(u => u.email === email);
  if (existingUser) {
    return { success: false, message: 'Этот email уже зарегистрирован!' };
  }

  const newUser = {
    email,
    password,
    name,
    nickname: nickname || '',
    avatar: window.currentAvatar,
    registeredAt: new Date().toISOString(),
    studiedWords: {},
    quizzesTaken: 0
  };

  allUsers.push(newUser);
  saveUsers();

  try {
    if (EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: email,
        to_name:  name,
        from_email: ADMIN_EMAIL,
        message: "Спасибо за регистрацию в JASS School! Начните изучать английский уже сегодня."
      });
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, {
        admin_email: ADMIN_EMAIL,
        user_email:  email,
        user_name:   name,
        registration_date: new Date().toLocaleDateString('ru-RU')
      });
    }
  } catch (emailError) {
    console.warn('EmailJS failed, continuing:', emailError);
  }

  currentUser        = newUser;
  window.currentUser = newUser;
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  window.currentAvatar = null;

  return { success: true, message: 'Добро пожаловать!' };
}

// Вход существующего пользователя  ← НЕ async, чтобы result.success работал сразу
function loginUser(email, password) {
  const user = allUsers.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser        = user;
    window.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

    if (typeof window.studiedWords !== 'undefined') {
      window.studiedWords  = user.studiedWords  ? { ...user.studiedWords } : {};
      window.quizzesTaken  = user.quizzesTaken  || 0;
    }

    setTimeout(() => {
      if (typeof window.updateAvatarDisplay === 'function') window.updateAvatarDisplay();
    }, 100);

    return { success: true, message: 'Добро пожаловать!' };
  }
  return { success: false, message: 'Неверный email или пароль!' };
}

// Проверка — залогинен ли пользователь
function isLoggedIn() {
  return !!window.currentUser;
}
window.isLoggedIn = isLoggedIn;

// Выход из аккаунта (полный)
function logoutUser() {
  currentUser        = null;
  window.currentUser = null;
  localStorage.removeItem('currentUser');

  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.add('hidden');

  if (typeof window.wordState !== 'undefined') {
    window.wordState = { known: new Set(), currentIndex: 0, currentMode: 'vocab' };
  }
  if (typeof window.studiedWords !== 'undefined') {
    window.studiedWords = {};
    window.quizzesTaken = 0;
  }
  if (typeof resetQuiz === 'function') resetQuiz();
}
window.logoutUser = logoutUser;

// Сохранение всех пользователей в localStorage
function saveUsers() {
  localStorage.setItem('allUsers', JSON.stringify(allUsers));
  if (currentUser) {
    const userIndex = allUsers.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
      allUsers[userIndex] = {
        ...currentUser,
        studiedWords: window.studiedWords || {},
        quizzesTaken: window.quizzesTaken || 0
      };
      localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }
  }
}

// ═══════════════════════════════════════════════════════════
//  РЕДАКТИРОВАНИЕ ПРОФИЛЯ
// ═══════════════════════════════════════════════════════════
let editAvatar = null;

function openEditProfile() {
  const modal             = document.getElementById('edit-profile-modal');
  const editName          = document.getElementById('edit-name');
  const editNickname      = document.getElementById('edit-nickname');
  const editAvatarPreview = document.getElementById('edit-avatar-preview');

  if (currentUser) {
    editName.value = currentUser.name || '';
    let displayNickname = currentUser.nickname || '';
    if (displayNickname.startsWith('@')) displayNickname = displayNickname.substring(1);
    editNickname.value = displayNickname;

    const avatarToDisplay = editAvatar !== null ? editAvatar : currentUser.avatar;
    editAvatarPreview.innerHTML = avatarToDisplay
      ? `<img src="${avatarToDisplay}" style="width:100%;height:100%;object-fit:cover;">`
      : '👤';

    if (editAvatar === null) editAvatar = currentUser.avatar;
  }
  modal.classList.remove('hidden');
}

function closeEditProfile() {
  document.getElementById('edit-profile-modal').classList.add('hidden');
  editAvatar = null;
}

function saveProfile() {
  const editName     = document.getElementById('edit-name');
  const editNickname = document.getElementById('edit-nickname');

  if (currentUser) {
    currentUser.name = editName.value || currentUser.name;

    let nickname = editNickname.value.trim();
    if (nickname && !nickname.startsWith('@')) nickname = '@' + nickname;
    currentUser.nickname = nickname || currentUser.nickname;
    currentUser.avatar   = editAvatar;

    const userIndex = allUsers.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) allUsers[userIndex] = currentUser;

    saveUsers();
    window.currentUser = currentUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    if (typeof window.updateAvatarDisplay === 'function') window.updateAvatarDisplay();

    editAvatar = null;
    closeEditProfile();
  }
}

window.openEditProfile  = openEditProfile;
window.closeEditProfile = closeEditProfile;
window.saveProfile      = saveProfile;