// EmailJS Service Configuration
const EMAILJS_CONFIG = {
  publicKey: "k5wqyuxPlo61XOSqe",
  serviceId: "service_surfsxr",
  userTemplateId: "template_h16sx1t", // Auto-responder to user
  adminTemplateId: "template_utz9l08", // Notification to admin
  contactTemplateId: "template_utz9l08", // Template for contact form (we can use the same or create new)
  adminEmail: "jasss.school773@gmail.com"
};

// Initialize EmailJS
document.addEventListener('DOMContentLoaded', () => {
  if (EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY") {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }

  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;
      const statusDiv = document.getElementById('contact-message-status');

      statusDiv.textContent = 'Отправка...';
      statusDiv.style.color = 'var(--text2)';

      const success = await sendContactEmail(name, email, message);
      if (success) {
        statusDiv.textContent = 'Сообщение успешно отправлено!';
        statusDiv.style.color = 'var(--green)';
        contactForm.reset();
      } else {
        statusDiv.textContent = 'Ошибка отправки!';
        statusDiv.style.color = 'var(--red)';
      }
    });
  }
});

/**
 * Sends welcome email to new user (auto-responder)
 * @param {string} userEmail - User's email address
 * @param {string} userName - User's name
 * @returns {Promise<void>}
 */
async function sendWelcomeEmail(userEmail, userName) {
  try {
    if (EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") {
      console.warn('EmailJS not configured - skipping welcome email');
      return;
    }

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.userTemplateId,
      {
        to_email: userEmail,
        to_name: userName,
        from_email: EMAILJS_CONFIG.adminEmail,
        message: "Спасибо за регистрацию в JASS School! Начните изучать английский уже сегодня."
      }
    );
    console.log('Welcome email sent successfully to:', userEmail);
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
}

/**
 * Sends registration notification to admin
 * @param {string} userEmail - User's email address
 * @param {string} userName - User's name
 * @returns {Promise<void>}
 */
async function sendAdminNotification(userEmail, userName) {
  try {
    if (EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") {
      console.warn('EmailJS not configured - skipping admin notification');
      return;
    }

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.adminTemplateId,
      {
        admin_email: EMAILJS_CONFIG.adminEmail,
        user_email: userEmail,
        user_name: userName,
        registration_date: new Date().toLocaleDateString('ru-RU')
      }
    );
    console.log('Admin notification sent successfully');
  } catch (error) {
    console.error('Error sending admin notification:', error);
  }
}

/**
 * Sends both welcome email and admin notification
 * @param {string} userEmail - User's email address
 * @param {string} userName - User's name
 * @returns {Promise<void>}
 */
async function sendRegistrationEmails(userEmail, userName) {
  try {
    await Promise.all([
      sendWelcomeEmail(userEmail, userName),
      sendAdminNotification(userEmail, userName)
    ]);
  } catch (error) {
    console.error('Error in sendRegistrationEmails:', error);
  }
}

/**
 * Sends contact form message to admin
 * @param {string} name - User's name
 * @param {string} email - User's email address
 * @param {string} message - User's message
 * @returns {Promise<boolean>}
 */
async function sendContactEmail(name, email, message) {
  try {
    if (EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") {
      console.warn('EmailJS not configured - skipping contact email');
      alert('EmailJS не настроен, но сообщение будет сохранено локально!');
      return false;
    }

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      {
        admin_email: EMAILJS_CONFIG.adminEmail,
        from_name: name,
        from_email: email,
        message: message,
        date: new Date().toLocaleDateString('ru-RU')
      }
    );
    console.log('Contact email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    alert('Ошибка отправки сообщения, попробуйте позже!');
    return false;
  }
}