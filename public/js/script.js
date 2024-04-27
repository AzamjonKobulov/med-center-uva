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

document.addEventListener('DOMContentLoaded', function () {
  // Get necessary elements
  const licenseSlider = document.getElementById('licenseSlider');
  const licenseSlides = licenseSlider.querySelector('#licenseSlides');
  const prevBtn = licenseSlider.querySelector('#licenseSlidePrevBtn');
  const nextBtn = licenseSlider.querySelector('#licenseSlideNextBtn');
  const buttons = licenseSlides.querySelectorAll('button');
  const activeSlideImage = document
    .getElementById('licenseActiveSlideImage')
    .querySelector('img');

  let currentSlide = 0;
  let totalSlides = buttons.length;
  const slideWidth = licenseSlides.children[0].offsetWidth;
  const slideHeight = licenseSlides.children[0].offsetHeight;
  const containerWidth = licenseSlides.offsetWidth;
  const containerHeight = licenseSlides.offsetHeight;

  // Function to show the current slide
  function showSlide(slideIndex) {
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }

    let translateXValue = 0;
    let translateYValue = 0;

    // Check viewport width
    if (window.innerWidth < 640) {
      // Calculate horizontal translation
      translateXValue = -(
        slideIndex * slideWidth -
        (containerWidth - slideWidth) / 2
      );
      // Set flex-direction to row
      licenseSlides.style.flexDirection = 'row';
      // Set container width to fit all slides horizontally
      licenseSlides.style.width = `${totalSlides * slideWidth}px`;
    } else {
      // Calculate vertical translation
      translateYValue = -(
        slideIndex * slideHeight -
        (containerHeight - slideHeight) / 2
      );
      // Reset flex-direction to column
      licenseSlides.style.flexDirection = 'column';
      // Reset container width
      licenseSlides.style.width = 'auto';
    }

    // Apply the translation
    licenseSlides.style.transform = `translate(${translateXValue}px, ${translateYValue}px)`;

    // Remove shadow-base class from all buttons
    buttons.forEach((button) => button.classList.remove('shadow-base'));
    // Add shadow-base class to the active slide button
    buttons[slideIndex].classList.add('shadow-base');

    // Set the active slide image source
    const activeSlideImageUrl = buttons[slideIndex].querySelector('img').src;

    // Smoothly fade out the active slide image
    activeSlideImage.classList.remove('opacity-100');
    activeSlideImage.classList.add('opacity-0');

    setTimeout(() => {
      // Set the new image source
      activeSlideImage.src = activeSlideImageUrl;

      // Smoothly fade in the new active slide image
      activeSlideImage.classList.remove('opacity-0');
      activeSlideImage.classList.add('opacity-100');
    }, 300); // Adjust the delay as needed for transition duration

    // Update current slide index
    currentSlide = slideIndex;

    // Check if the navigation buttons should be disabled and change opacity
    if (currentSlide === 0) {
      prevBtn.disabled = true; // Disable previous button if at the beginning
      prevBtn.style.opacity = '0.5'; // Change opacity of disabled button
    } else {
      prevBtn.disabled = false; // Enable previous button otherwise
      prevBtn.style.opacity = '1'; // Reset opacity of enabled button
    }

    if (currentSlide === totalSlides - 1) {
      nextBtn.disabled = true; // Disable next button if at the end
      nextBtn.style.opacity = '0.5'; // Change opacity of disabled button
    } else {
      nextBtn.disabled = false; // Enable next button otherwise
      nextBtn.style.opacity = '1'; // Reset opacity of enabled button
    }
  }

  // Event listener for previous button
  prevBtn.addEventListener('click', function () {
    showSlide(currentSlide - 1);
  });

  // Event listener for next button
  nextBtn.addEventListener('click', function () {
    showSlide(currentSlide + 1);
  });

  // Event listeners for slide buttons
  buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
      showSlide(index);
    });
  });

  // Show the initial slide
  showSlide(currentSlide);

  // Resize event listener to adjust slide layout on window resize
  window.addEventListener('resize', function () {
    // Update total slides count
    totalSlides = buttons.length;
    // Re-show current slide to adjust layout
    showSlide(currentSlide);
  });
});
