// js/animations.js
// Smooth animations and interactions for the portfolio

document.addEventListener("DOMContentLoaded", () => {
  
  // Fade in animation on page load
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.6s ease-in';
    document.body.style.opacity = '1';
  }, 100);

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements
  const animateElements = document.querySelectorAll(
    '.stat-card, .service-card, .timeline-item, .contact-form-wrapper, .contact-item, .profile-container'
  );
  
  animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Parallax effect for profile image on home page

  // Typing effect for main heading (optional)
  const mainHeading = document.querySelector('.main h2');
  if (mainHeading && mainHeading.textContent.includes("Hello, I'm Chouaib")) {
    mainHeading.classList.add('typing-effect');
  }

  // Counter animation for stats
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const text = stat.textContent.trim();
    if (text.match(/^\d+\+?$/)) {
      const targetNumber = parseInt(text);
      animateCounter(stat, targetNumber, text.includes('+'));
    }
  });

  // Stagger animation for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
  });

  // Service cards stagger
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
});

// Counter animation function
function animateCounter(element, target, hasPlus) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (hasPlus ? '+' : '');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

// Page transition effect
window.addEventListener('beforeunload', () => {
  document.body.style.opacity = '0';
});
