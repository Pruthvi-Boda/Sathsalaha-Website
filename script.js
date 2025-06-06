// Add simple scroll-triggered animations
function revealOnScroll() {
    const fadeIns = document.querySelectorAll('.fade-in-up');
    const triggerBottom = window.innerHeight * 0.9;
    fadeIns.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('show');
        }
    });
}

document.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);
