// Scroll Nav
document.addEventListener('scroll', function () {
  const navTop = document.querySelector('.nav-top');
  const header = document.querySelector('.header');
  if (window.scrollY > 0) {
    navTop.classList.add('-translate-y-full');
    header.classList.add('-translate-y-8');
  } else {
    navTop.classList.remove('-translate-y-full');
    header.classList.remove('-translate-y-8');
  }
});

// Notifications
const notifications = document.querySelector('.notifications');
const notificationsContent = document.querySelector('.notifications-content');
const notificationsOpen = document.querySelector('.notifications-open');
const notificationsClose = document.querySelector('.notifications-close');

function toggleNotifications() {
  notifications.classList.toggle('-translate-y-full');
  notificationsContent.classList.toggle('-translate-y-full');
  notificationsClose.classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
}

notificationsOpen.addEventListener('click', toggleNotifications);
notificationsClose.addEventListener('click', toggleNotifications);

notifications.addEventListener('click', (event) => {
  if (event.target === notifications) {
    toggleNotifications();
  }
});
