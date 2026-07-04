document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('scrollArrow');
    
    const scrollTracker = document.createElement('div');
    scrollTracker.style.position = 'absolute';
    scrollTracker.style.top = '0';
    scrollTracker.style.left = '0';
    scrollTracker.style.width = '1px';
    scrollTracker.style.height = '10px';
    document.body.prepend(scrollTracker);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                arrow.style.opacity = '1';
                arrow.style.visibility = 'visible';
            } else {
                arrow.style.opacity = '0';
                arrow.style.visibility = 'hidden';
            }
        });
    }, { threshold: 0 });

    observer.observe(scrollTracker);
});