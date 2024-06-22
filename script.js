document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Clear previous errors
        clearErrors();

        // Validate the form
        let isValid = validateForm();

        if (isValid) {
            alert('Form submitted successfully!');
            // Here you can add code to submit the form data
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate Full Name
        const fullName = document.getElementById('fullName').value;
        if (fullName.length < 3) {
            showError('fullName', 'Full Name must be at least 3 characters long.');
            isValid = false;
        }

        // Validate Username
        const username = document.getElementById('username').value;
        if (username.length < 3) {
            showError('username', 'Username must be at least 3 characters long.');
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        // Validate Phone Number
        const phoneNumber = document.getElementById('phoneNumber').value;
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneNumber)) {
            showError('phoneNumber', 'Please enter a valid 10-digit phone number.');
            isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            showError('password', 'Password must be at least 6 characters long.');
            isValid = false;
        }

        // Validate Confirm Password
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (confirmPassword !== password) {
            showError('confirmPassword', 'Passwords do not match.');
            isValid = false;
        }

        return isValid;
    }

    function showError(inputId, message) {
        const errorSpan = document.getElementById(`${inputId}-error`);
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.style.display = 'none');
    }
});
