// Task One:

const li = document.getElementById("list-item");
const drobdownMenu = document.querySelector(".dropdown-menu");

li.addEventListener("click", () => {
    drobdownMenu.classList.toggle("active");
    // plus and mines
    plus.classList.toggle("active");
    mines.classList.toggle("active");
});


// Humburger Menu
const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");

humburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
});


// Clicked input to remove pleacholder

// inputs on click remove pleacholder

let inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    let originalPlaceholder = input.placeholder;

    input.addEventListener("focus", function() {
        this.placeholder = "";
    });

    input.addEventListener("blur", function() {
        if (this.value === "") {
            this.placeholder = originalPlaceholder;
        }
    });
});




// validation Form
function validateField(field) {
    const value = document.getElementById(field).value.trim();
    const errorElement = document.getElementById(`${field}Error`);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (field === 'name') {
        if (!value) {
            errorElement.classList.remove('hidden');
        } else {
            errorElement.classList.add('hidden');
        }
    }else if (field === 'lname') {
        if (!value) {
            errorElement.classList.remove('hidden');
        } else {
            errorElement.classList.add('hidden');
        }
    }else if (field === 'email') {
        if (!value || !emailRegex.test(value)) {
            errorElement.classList.remove('hidden');
        } else {
            errorElement.classList.add('hidden');
        }
    } else if (field === 'number') {
        if (!value || value < 0) {
            errorElement.classList.remove('hidden');
        } else {
            errorElement.classList.add('hidden');
        }
    } else if (field === 'message') {
        if (!value) {
            errorElement.classList.remove('hidden');
        } else {
            errorElement.classList.add('hidden');
        }
    }
}
function validateForm(event) {
    event.preventDefault(); // Prevent sending the form directly

    // Reset error messages
    document.querySelectorAll('.text-red-500').forEach(error => error.classList.add('hidden'));

    let isValid = true;

    // Verification First Name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').classList.remove('hidden');
        isValid = false;
    }
    // Verification last name
    const lName = document.getElementById('lname').value.trim();
    if (!lName) {
        document.getElementById('lNameError').classList.remove('hidden');
        isValid = false;
    }

    // Verification Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    }

    // Verification Phone Number
    const phone = document.getElementById('phone').value;
    if (!phone || phone < 0) {
        document.getElementById('numberError').classList.remove('hidden');
        isValid = false;
    }

    // Verification Message
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').classList.remove('hidden');
        isValid = false;
    }

    // If everything is correct, you can submit the form.
    if (isValid) {
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('hidden');

        // 
        setTimeout(() => {
            successMessage.classList.add('hidden'); // Hide message after 3 seconds
        }, 3000);

        // Reset Form
        document.getElementById('contactForm').reset();
    }

    return isValid;
}
