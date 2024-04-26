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

// Add click event listener to the navigation button
goRightButton.addEventListener('click', function () {
  // Calculate the amount to scroll
  const scrollAmount = 100; // Adjust this value as needed
  const scrollDuration = 300; // Duration of the scroll animation in milliseconds

  // Get the initial scroll position
  const startScroll = buttonsContainer.scrollLeft;

  // Calculate the target scroll position
  const targetScroll = startScroll + scrollAmount;

  // Define the start time of the scroll animation
  const startTime = performance.now();

  // Define the scroll animation function
  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const scrollProgress = Math.min(elapsedTime / scrollDuration, 1);
    const easedProgress = scrollProgress * (2 - scrollProgress);

    buttonsContainer.scrollLeft =
      startScroll + (targetScroll - startScroll) * easedProgress;

    if (scrollProgress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  // Start the scroll animation
  requestAnimationFrame(scrollAnimation);
});
