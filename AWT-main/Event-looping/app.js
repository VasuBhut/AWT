// app.js
// Define a class to handle user registration form data
class RegistrationForm {
    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
    }

    // Method to handle form submission
    handleSubmit(event) {
        event.preventDefault();
        this.name = event.target.elements.name.value;
        this.email = event.target.elements.email.value;
        this.password = event.target.elements.password.value;

        if (this.validateData()) {
            this.registerUser();
        }
    }

    // Method to validate form data
    validateData() {
        if (this.name.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
            console.log('Please fill in all fields.');
            return false;
        }

        if (!this.isValidEmail(this.email)) {
            console.log('Invalid email address.');
            return false;
        }

        return true;
    }

    // Method to check if the email is valid
    isValidEmail(email) {
        // Simple email validation for demonstration purposes
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Method to register the user
    registerUser() {
        // Perform registration logic here (e.g., send data to server)
        console.log('User registered:', this.name, this.email);
    }
}

// Create a new instance of the RegistrationForm class
const registrationForm = new RegistrationForm();

// Add an event listener to the form for form submission
const formElement = document.getElementById('registrationForm');
formElement.addEventListener('submit', (event) => {
    registrationForm.handleSubmit(event);
});
