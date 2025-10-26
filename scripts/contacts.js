document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '') {
            alert('Пожалуйста, введите ваше имя');
            return;
        }
        
        if (email.trim() === '' || !isValidEmail(email)) {
            alert('Пожалуйста, введите корректный email');
            return;
        }
        
        if (message.trim() === '') {
            alert('Пожалуйста, введите сообщение');
            return;
        }

        alert('Сообщение отправлено!');
        contactForm.reset();
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});