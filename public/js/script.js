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

// Mobile Menu
const mobileMenuBtns = document.querySelectorAll('#mobileMenuBtn');
const mobileMenu = document.querySelector('#mobileMenu');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('translate-y-full');
  document.body.classList.toggle('overflow-hidden');
};

mobileMenuBtns.forEach((btn) => {
  btn.addEventListener('click', toggleMobileMenu);
});

document.querySelectorAll('#mobileMenu ul a').forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

// Get the buttons container
const buttonsContainer = document.getElementById('buttonsContainer');

// Get the navigation button
const goRightButton = document.getElementById('goRight');

// Get the arrow icon
const arrowIcon = document.getElementById('arrowIcon');

// Add click event listener to the navigation button
goRightButton.addEventListener('click', function () {
  // Toggle rotation class on arrow icon
  arrowIcon.classList.toggle('rotate-180');

  // If the container is scrolled all the way to the right
  if (
    buttonsContainer.scrollLeft ===
    buttonsContainer.scrollWidth - buttonsContainer.clientWidth
  ) {
    // Scroll to the start
    buttonsContainer.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    // Otherwise, scroll to the right
    buttonsContainer.scrollBy({ left: 100, behavior: 'smooth' });
  }
});

// Add event listener for scroll end
buttonsContainer.addEventListener('scroll', function () {
  // If the container is scrolled all the way to the right
  if (
    buttonsContainer.scrollLeft ===
    buttonsContainer.scrollWidth - buttonsContainer.clientWidth
  ) {
    // Add rotation class to arrow icon
    arrowIcon.classList.add('rotate-180');
  } else {
    // Remove rotation class from arrow icon
    arrowIcon.classList.remove('rotate-180');
  }
});
