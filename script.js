// JavaScript for parallax background scrolling effect
window.addEventListener('scroll', function () {
    const backgroundImage = document.querySelector('.background-image');
    const scrollPosition = window.scrollY;

    // Create a parallax effect by changing background position based on scroll
    backgroundImage.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Shrink header on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// JavaScript for fade-in effect on scroll
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Check if the element is visible in the viewport
        if (elementTop < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
});
