export function initializeBlog() {
  const blogCards = document.querySelectorAll('.blog-card');
  const blogLinks = document.querySelectorAll('.blog-link');

  // Add intersection observer for animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  blogCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });

  // Handle blog link clicks
  blogLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Add loading state
      const originalText = link.textContent;
      link.textContent = 'Loading...';
      
      // Simulate navigation
      setTimeout(() => {
        link.textContent = originalText;
        console.log('Opening blog post...');
      }, 1000);
    });
  });

  // Add hover effects to blog cards
  blogCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}