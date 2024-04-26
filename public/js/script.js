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

// Buttons Container
const buttonsContainer = document.getElementById('buttonsContainer');
const goRightButton = document.getElementById('goRight');

goRightButton.addEventListener('click', function () {
  // Calculate the amount to scroll
  const scrollAmount = 100; // Adjust this value as needed

  // Scroll the container to the right smoothly
  buttonsContainer.scrollTo({
    left: buttonsContainer.scrollLeft + scrollAmount,
    behavior: 'smooth', // This makes the scrolling smooth
  });
});

// Add scroll event listener to the buttons container
goRightButton.addEventListener('scroll', function () {
  // Check if scrolling has reached the end
  if (
    buttonsContainer.scrollLeft ===
    buttonsContainer.scrollWidth - buttonsContainer.clientWidth
  ) {
    // Move the goRightButton to the start
    buttonsContainer.scrollTo({ left: 0, behavior: 'smooth' });
  }
});

var swiper = new Swiper('.pricing__slider', {
  slidesPerView: 1.4,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  allowTouchMove: false,
  speed: 300,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 32,
    },
  },
});

var paginationButtons = document.querySelectorAll('.tab-button');
paginationButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var slideIndex = parseInt(this.getAttribute('data-slide'));
    swiper.slideTo(slideIndex);

    // Move slides dynamically
    var slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(function (slide, index) {
      if (index < slideIndex) {
        slide.style.order = index - slideIndex;
      } else if (index > slideIndex) {
        slide.style.order = index - slideIndex;
      } else {
        slide.style.order = 0;
      }
    });
  });
});

swiper.on('slideChange', function () {
  var activeIndex = swiper.activeIndex;
  paginationButtons.forEach(function (button, index) {
    if (index === activeIndex) {
      button.classList.add('active-tab');
    } else {
      button.classList.remove('active-tab');
    }
  });
});

// Handle click on tab content
var tabContents = document.querySelectorAll('.swiper-slide');
tabContents.forEach(function (tab, index) {
  tab.addEventListener('click', function () {
    swiper.slideTo(index);
    paginationButtons.forEach(function (button, btnIndex) {
      if (index === btnIndex) {
        button.classList.add('active-tab');
      } else {
        button.classList.remove('active-tab');
      }
    });
  });
});
