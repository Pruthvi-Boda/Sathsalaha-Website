export function initializeAbout() {
  const stats = document.querySelectorAll('.stat-number');
  
  // Animate numbers when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        const suffix = finalValue.replace(/\d/g, '');
        
        animateNumber(target, 0, numericValue, suffix, 2000);
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.5
  });

  stats.forEach(stat => {
    observer.observe(stat);
  });
}

function animateNumber(element, start, end, suffix, duration) {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (end - start) * easeOutQuart);
    
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}