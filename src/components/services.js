export function initializeServices() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  // Add intersection observer for animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });

  // Handle service link clicks
  const serviceLinks = document.querySelectorAll('.service-link');
  serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      link.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}