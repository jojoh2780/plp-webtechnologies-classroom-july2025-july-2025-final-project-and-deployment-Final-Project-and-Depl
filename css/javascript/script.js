// Navigation menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (will be added dynamically for small screens)
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    document.querySelector('header .container').appendChild(menuToggle);
    
    const nav = document.querySelector('header nav ul');
    menuToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Check screen size and adjust menu
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            nav.style.display = 'none';
            menuToggle.style.display = 'block';
        } else {
            nav.style.display = 'flex';
            menuToggle.style.display = 'none';
        }
    }
    
    // Initial check
    checkScreenSize();
    
    // Check on resize
    window.addEventListener('resize', checkScreenSize);
    
    // Newsletter form validation
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (validateEmail(email)) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Email validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            if (email.value.trim() === '') {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!validateEmail(email.value)) {
                emailError.textContent = 'Please enter a valid email';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Message validation
            const message = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (message.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }
        });
    }
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-bar, .portfolio-item, .testimonial');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // If element is in viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.style.animationPlayState = 'running';
            }
        });
    }
    
    // Initial check for elements in viewport
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Email validation helper function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});