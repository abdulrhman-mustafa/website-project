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
