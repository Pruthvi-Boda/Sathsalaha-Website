// Scroll-triggered animations and utilities
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

document.addEventListener('scroll', () => {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;
    if (window.scrollY > 300) {
        btn.classList.add('show-scroll');
    } else {
        btn.classList.remove('show-scroll');
    }
});

document.getElementById('scroll-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
