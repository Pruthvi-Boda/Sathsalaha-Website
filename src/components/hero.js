export function initializeHero() {
  const heroButtons = document.querySelectorAll('.hero-buttons .btn');
  
  heroButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (button.textContent.includes('Get Started')) {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        const offsetTop = contactSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      } else if (button.textContent.includes('Learn More')) {
        e.preventDefault();
        const aboutSection = document.querySelector('#about');
        const offsetTop = aboutSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add parallax effect to floating cards
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}