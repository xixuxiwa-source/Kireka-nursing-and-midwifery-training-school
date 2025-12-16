// Updated scripts.js (with mobile menu toggle)
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.top-nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    // Contact form handling (same as before)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const response = document.getElementById('form-response');
            response.textContent = 'Message sent successfully! We will get back to you soon.';
            response.style.color = '#003B49';
            form.reset();
        });
    }
});