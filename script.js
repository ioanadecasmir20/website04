// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
  });
}

// Image Carousel Logic
const slides = document.querySelectorAll('.carousel-slide');
let current = 0;

function showNextSlide() {
  if (!slides.length) return;

  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

// Start carousel if slides are found
if (slides.length) {
  slides[current].classList.add('active'); // in case HTML didn't do it by default
  setInterval(showNextSlide, 4000); // 4-second loop
}
