window.addEventListener('DOMContentLoaded', (event) => {
    // Fade-in animation for header and footer
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.opacity = 1;
        }, 300);
    });

    // Slide-in animation for blog cards
    const slideElements = document.querySelectorAll('.slide-in');
    slideElements.forEach((element, index) => {
        element.style.opacity = 0;
        element.style.transform = 'translateX(-50px)';
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateX(0)';
        }, 500 + index * 200);
    });
});
