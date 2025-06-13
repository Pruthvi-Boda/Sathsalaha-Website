export function initializePortfolio() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const portfolioButtons = document.querySelectorAll('.portfolio-btn');

  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter items
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category.includes(filter)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Portfolio item hover effects
  portfolioItems.forEach(item => {
    const overlay = item.querySelector('.portfolio-overlay');
    
    item.addEventListener('mouseenter', () => {
      overlay.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
      overlay.style.opacity = '0';
    });
  });

  // Portfolio button clicks
  portfolioButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      // Simulate project view
      console.log('Opening project details...');
    });
  });

  // Intersection observer for animation
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

  portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
  });
}