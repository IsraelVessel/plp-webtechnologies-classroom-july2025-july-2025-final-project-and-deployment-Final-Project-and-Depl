document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Toggle menu on mobile
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('formMessage');

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = 'red';
                return;
            }

            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = 'red';
                return;
            }

            formMessage.textContent = 'Thank you for your message!';
            formMessage.style.color = 'green';
            this.reset();
        });
    }

    // Animate gallery images on scroll
    const galleryImages = document.querySelectorAll('.gallery-img');
    window.addEventListener('scroll', () => {
        galleryImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                img.style.transform = 'translateY(0) scale(1)';
                img.style.opacity = '1';
            } else {
                img.style.transform = 'translateY(20px) scale(0.95)';
                img.style.opacity = '0.5';
            }
        });
    });
});
