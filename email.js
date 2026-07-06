// ── User state ────────────────────────────────────────────
window.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
window.allUsers    = JSON.parse(localStorage.getItem('allUsers')    || '[]');
let currentUser = window.currentUser;
let allUsers    = window.allUsers;
window.currentAvatar = null;
window.postRegAvatar = null;

// ── Image editor state ────────────────────────────────────
let editorImage    = null;
let editorRotation = 0;
let isCameraMode   = false;
let editorContext  = 'register'; // register, edit, postreg

// ── Helper to stop all media tracks ───────────────────────
function stopCameraStream() {
  const video = document.getElementById('camera-video');
  if (video && video.srcObject) {
    const stream = video.srcObject;
    stream.getTracks().forEach(track => {
      track.stop();
    });
    video.srcObject = null;
  }
}

// ── Helper to toggle delete button visibility ───────────────────────
function updateDeleteButton(previewId, deleteBtnId, avatarData) {
  const btn = document.getElementById(deleteBtnId);
  if (btn) {
    if (avatarData) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }
}

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
  
  // Stop any existing stream first
  stopCameraStream();
  
  try {
    // Try to get user-facing camera, fall back to any camera
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
    } catch (err) {
      console.warn('User-facing camera not available, trying any camera...');
      stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 } }
      });
    }
    
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      canvas.classList.add('hidden');
      video.classList.remove('hidden');
      captureBtn.style.display = 'inline-block';
      captureBtn.onclick = captureFromCamera;
      modal.classList.remove('hidden');
      video.play().catch(err => console.error('Error playing video:', err));
    };
  } catch (err) {
    alert('Не удалось получить доступ к камере. Пожалуйста, проверьте разрешения.');
    console.error('Camera error:', err);
  }
}

function captureFromCamera() {
  const video      = document.getElementById('camera-video');
  const canvas     = document.getElementById('editor-canvas');
  const ctx        = canvas.getContext('2d');
  const captureBtn = document.getElementById('camera-capture-btn');

  // Make sure video is ready
  if (!video.videoWidth || !video.videoHeight) {
    alert('Камера еще не готова, подождите немного...');
    return;
  }

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

  stopCameraStream();

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
      video.play().catch(err => console.error('Error playing video:', err));
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

  if (!video.videoWidth || !video.videoHeight) {
    alert('Камера еще не готова, подождите немного...');
    return;
  }

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
//  КАМЕРА  (ПОСЛЕ РЕГИСТРАЦИИ)
// ═══════════════════════════════════════════════════════════
function startPostRegCamera() {
  editorContext = 'postreg';
  isCameraMode  = true;
  const modal      = document.getElementById('image-editor-modal');
  const video      = document.getElementById('camera-video');
  const canvas     = document.getElementById('editor-canvas');
  const captureBtn = document.getElementById('camera-capture-btn');

  stopCameraStream();

  navigator.mediaDevices.getUserMedia({
    video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }
  }).then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      canvas.classList.add('hidden');
      video.classList.remove('hidden');
      captureBtn.style.display = 'inline-flex';
      captureBtn.onclick = capturePostRegCamera;
      document.getElementById('post-registration-modal').classList.add('hidden');
      modal.classList.remove('hidden');
      video.play().catch(err => console.error('Error playing video:', err));
    };
  }).catch(err => {
    alert('Не удалось получить доступ к камере');
    console.error(err);
  });
}

function capturePostRegCamera() {
  const video      = document.getElementById('camera-video');
  const canvas     = document.getElementById('editor-canvas');
  const ctx        = canvas.getContext('2d');
  const captureBtn = document.getElementById('camera-capture-btn');

  if (!video.videoWidth || !video.videoHeight) {
    alert('Камера еще не готова, подождите немного...');
    return;
  }

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

function openPostRegImageEditor(imageData) {
  editorContext = 'postreg';
  document.getElementById('post-registration-modal').classList.add('hidden');
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
  stopCameraStream();
  const modal = document.getElementById('image-editor-modal');
  modal.classList.add('hidden');
  
  // Reopen the appropriate modal
  if (editorContext === 'edit') {
    document.getElementById('edit-profile-modal').classList.remove('hidden');
  } else if (editorContext === 'postreg') {
    document.getElementById('post-registration-modal').classList.remove('hidden');
  }
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
    editAvatar = imageData;
    const preview = document.getElementById('edit-avatar-preview');
    if (preview) preview.innerHTML = `<img src="${imageData}" style="width:100%;height:100%;object-fit:cover;">`;
    updateDeleteButton('edit-avatar-preview', 'edit-delete-btn', editAvatar);
    closeImageEditor();
    openEditProfile();
  } else if (editorContext === 'postreg') {
    window.postRegAvatar = imageData;
    const preview = document.getElementById('post-reg-avatar-preview');
    if (preview) preview.innerHTML = `<img src="${imageData}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
    updateDeleteButton('post-reg-avatar-preview', 'post-reg-delete-btn', window.postRegAvatar);
    closeImageEditor();
  } else {
    window.currentAvatar = imageData;
    const preview = document.getElementById('register-avatar-preview');
    if (preview) preview.innerHTML = `<img src="${imageData}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
    closeImageEditor();
  }
}

// Совместимость со старым кодом
function saveEditImage() { saveEditedImage(); }

// Глобальный экспорт редактора
window.openImageEditor     = openImageEditor;
window.openEditImageEditor = openEditImageEditor;
window.openPostRegImageEditor = openPostRegImageEditor;
window.closeImageEditor    = closeImageEditor;
window.rotateImage         = rotateImage;
window.saveEditedImage     = saveEditedImage;
window.saveEditImage       = saveEditImage;
window.startCamera         = startCamera;
window.captureFromCamera   = captureFromCamera;
window.startEditCamera     = startEditCamera;
window.captureEditCamera   = captureEditCamera;
window.startPostRegCamera  = startPostRegCamera;
window.capturePostRegCamera = capturePostRegCamera;

// ═══════════════════════════════════════════════════════════
//  ИНИЦИАЛИЗАЦИЯ (слушатели файловых инпутов)
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
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
  
  // Галерея → после регистрации
  const postRegAvatarInput = document.getElementById('post-reg-avatar');
  if (postRegAvatarInput) {
    postRegAvatarInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = ev => openPostRegImageEditor(ev.target.result);
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
async function registerUser(email, password, name, lastName) {
  const existingUser = allUsers.find(u => u.email === email);
  if (existingUser) {
    return { success: false, message: 'Этот email уже зарегистрирован!' };
  }

  const newUser = {
    email,
    password,
    name,
    lastName: lastName || '',
    nickname: '',
    avatar: null,
    registeredAt: new Date().toISOString(),
    studiedWords: {},
    quizzesTaken: 0
  };

  allUsers.push(newUser);
  saveUsers();

  // Send welcome email and admin notification using the new service
  try {
    if (typeof sendRegistrationEmails !== 'undefined') {
      await sendRegistrationEmails(email, name);
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

// Validate nickname
function validateNickname(nickname) {
  // Check if nickname is only English letters, numbers, and underscores
  const nicknameRegex = /^[a-zA-Z0-9_]+$/;
  if (!nicknameRegex.test(nickname)) {
    return { valid: false, message: 'Nickname must contain only English letters, numbers, and underscores' };
  }
  
  // Check if nickname is unique
  const existingUser = allUsers.find(u => u.nickname === '@' + nickname);
  if (existingUser) {
    return { valid: false, message: 'This nickname is already taken!' };
  }
  
  return { valid: true };
}

// Сохранение никнейма
window.validateAndSaveNickname = function() {
  const nicknameInput = document.getElementById('post-reg-nickname');
  const nickname = nicknameInput.value.trim();
  const messageDiv = document.getElementById('post-reg-nickname-message');
  
  if (!nickname) {
    messageDiv.textContent = 'Пожалуйста, введите никнейм';
    messageDiv.className = 'auth-message error';
    return;
  }
  
  const validation = validateNickname(nickname);
  if (!validation.valid) {
    messageDiv.textContent = validation.message;
    messageDiv.className = 'auth-message error';
    return;
  }
  
  // Save nickname
  if (currentUser) {
    currentUser.nickname = '@' + nickname;
    saveUsers();
    window.currentUser = currentUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }
  
  // Move to step 2
  document.getElementById('post-reg-step1').style.display = 'none';
  document.getElementById('post-reg-step2').style.display = 'block';
}

// Обновленная функция открытия модалки после регистрации
window.showPostRegModal = function() {
  window.postRegAvatar = null;
  const preview = document.getElementById('post-reg-avatar-preview');
  if (preview) preview.innerHTML = '👤';
  updateDeleteButton('post-reg-avatar-preview', 'post-reg-delete-btn', window.postRegAvatar);
  // Reset steps
  document.getElementById('post-reg-step1').style.display = 'block';
  document.getElementById('post-reg-step2').style.display = 'none';
  document.getElementById('post-reg-nickname').value = '';
  document.getElementById('post-reg-nickname-message').textContent = '';
  document.getElementById('post-reg-nickname-message').className = 'auth-message';
  document.getElementById('post-registration-modal').classList.remove('hidden');
}

// Вход существующего пользователя  ← НЕ async, чтобы result.success работал сразу
function loginUser(loginInput, password) {
  // Try to find user by email
  let user = allUsers.find(u => u.email === loginInput && u.password === password);
  
  // If not found, try by nickname (add @ prefix if needed)
  if (!user) {
    let searchNickname = loginInput;
    if (!searchNickname.startsWith('@')) searchNickname = '@' + searchNickname;
    user = allUsers.find(u => u.nickname === searchNickname && u.password === password);
  }
  
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
  return { success: false, message: 'Неверные данные для входа!' };
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
  document.body.classList.remove('screen-app');
  const sb = document.getElementById('sidebar');
  const bd = document.getElementById('backdrop');
  const mb = document.getElementById('menu-toggle-btn');
  if (sb) sb.classList.remove('open');
  if (bd) bd.classList.remove('open');
  if (mb) mb.classList.remove('open');

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
  const modal      = document.getElementById('edit-profile-modal');
  const editName   = document.getElementById('edit-name');
  const editLastname = document.getElementById('edit-lastname');
  const editNickname = document.getElementById('edit-nickname');
  const editAvatarPreview = document.getElementById('edit-avatar-preview');

  if (currentUser) {
    editName.value = currentUser.name || '';
    editLastname.value = currentUser.lastName || '';
    let displayNickname = currentUser.nickname || '';
    if (displayNickname.startsWith('@')) displayNickname = displayNickname.substring(1);
    editNickname.value = displayNickname;

    const avatarToDisplay = editAvatar !== null ? editAvatar : currentUser.avatar;
    editAvatarPreview.innerHTML = avatarToDisplay
      ? `<img src="${avatarToDisplay}" style="width:100%;height:100%;object-fit:cover;">`
      : '👤';

    if (editAvatar === null) editAvatar = currentUser.avatar;
    updateDeleteButton('edit-avatar-preview', 'edit-delete-btn', editAvatar);
  }
  modal.classList.remove('hidden');
}

function closeEditProfile() {
  document.getElementById('edit-profile-modal').classList.add('hidden');
  editAvatar = null;
}

function saveProfile() {
  const editName   = document.getElementById('edit-name');
  const editLastname = document.getElementById('edit-lastname');
  const editNickname = document.getElementById('edit-nickname');

  if (currentUser) {
    currentUser.name = editName.value || currentUser.name;
    currentUser.lastName = editLastname.value || currentUser.lastName;

    let nickname = editNickname.value.trim();
    if (nickname) {
      // Validate nickname when editing
      const validation = validateNickname(nickname);
      if (!validation.valid && currentUser.nickname !== '@' + nickname) {
        alert(validation.message);
        return;
      }
      if (!nickname.startsWith('@')) nickname = '@' + nickname;
      currentUser.nickname = nickname;
    }
    
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

// ═══════════════════════════════════════════════════════════
//  ПОСЛЕ РЕГИСТРАЦИИ
// ═══════════════════════════════════════════════════════════

function showPostRegModal() {
  window.postRegAvatar = null;
  const preview = document.getElementById('post-reg-avatar-preview');
  if (preview) preview.innerHTML = '👤';
  updateDeleteButton('post-reg-avatar-preview', 'post-reg-delete-btn', window.postRegAvatar);
  document.getElementById('post-registration-modal').classList.remove('hidden');
}

function skipPostRegPhoto() {
  document.getElementById('post-registration-modal').classList.add('hidden');
  window.postRegAvatar = null;
  showLanding();
}

function continuePostReg() {
  if (window.postRegAvatar && currentUser) {
    currentUser.avatar = window.postRegAvatar;
    window.currentUser = currentUser;
    saveUsers();
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }
  document.getElementById('post-registration-modal').classList.add('hidden');
  showLanding();
}

window.showPostRegModal = showPostRegModal;
window.skipPostRegPhoto = skipPostRegPhoto;
window.continuePostReg = continuePostReg;

// ═══════════════════════════════════════════════════════════
//  УДАЛЕНИЕ ФОТО
// ═══════════════════════════════════════════════════════════

function deleteEditAvatar(event) {
  event.stopPropagation(); // Prevent opening file picker
  editAvatar = null;
  const preview = document.getElementById('edit-avatar-preview');
  if (preview) preview.innerHTML = '👤';
  updateDeleteButton('edit-avatar-preview', 'edit-delete-btn', editAvatar);
}

function deletePostRegAvatar(event) {
  event.stopPropagation(); // Prevent opening file picker
  window.postRegAvatar = null;
  const preview = document.getElementById('post-reg-avatar-preview');
  if (preview) preview.innerHTML = '👤';
  updateDeleteButton('post-reg-avatar-preview', 'post-reg-delete-btn', window.postRegAvatar);
}

window.deleteEditAvatar = deleteEditAvatar;
window.deletePostRegAvatar = deletePostRegAvatar;
