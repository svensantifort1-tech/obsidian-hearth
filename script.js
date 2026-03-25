document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Shrinking Glass Navigation on Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true }); // passive: true improves scrolling performance

    // 2. "Hearth Rise" Entry Animations via Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after animating to save resources
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements with the animate class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});
