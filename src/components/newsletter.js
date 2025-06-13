export function initializeNewsletter() {
  const newsletterForm = document.querySelector('.newsletter-form');
  const emailInput = newsletterForm.querySelector('input[type="email"]');
  const submitButton = newsletterForm.querySelector('button[type="submit"]');

  // Handle form submission
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const originalButtonContent = submitButton.innerHTML;
    
    // Validate email
    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    // Show loading state
    submitButton.innerHTML = '<span>Subscribing...</span>';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      submitButton.innerHTML = '<span>Subscribed!</span>';
      submitButton.style.background = '#10b981';
      
      // Show success message
      showNotification('Successfully subscribed to our newsletter!', 'success');
      
      // Reset form
      emailInput.value = '';
      
      // Reset button after delay
      setTimeout(() => {
        submitButton.innerHTML = originalButtonContent;
        submitButton.disabled = false;
        submitButton.style.background = '';
      }, 3000);
    }, 1500);
  });

  // Email validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Show notification
  function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Add focus effects
  emailInput.addEventListener('focus', () => {
    emailInput.parentElement.style.transform = 'scale(1.02)';
  });
  
  emailInput.addEventListener('blur', () => {
    emailInput.parentElement.style.transform = 'scale(1)';
  });
}