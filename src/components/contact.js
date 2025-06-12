export function initializeContact() {
  const contactForm = document.querySelector('.contact-form');
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
  
  // Handle form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('.btn-primary');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      submitButton.textContent = 'Message Sent!';
      submitButton.style.background = '#10b981';
      
      // Reset form
      contactForm.reset();
      
      // Reset button after delay
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.background = '';
      }, 3000);
    }, 1500);
  });

  // Add floating label effect
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
  });

  // Add contact item hover effects
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
    });
  });
}