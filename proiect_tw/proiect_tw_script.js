// modificarea stilului unui grup de elemente
const elements = document.querySelectorAll(".info1");
elements.forEach( el => {
    el.style.padding = "10px";
});

// Dom manipulation - id
const contact = document.getElementById("contact");
contact.style.color = "white";
contact.style.paddingLeft = "30px";
contact.style.textShadow = "white 0.5px 0 4px";

// schimbare aleatoare a unei proprietati - color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const colorBox = document.getElementById("contact");
setInterval(() => {
    colorBox.style.color = getRandomColor();
}, 2000);

// validare formular folosind expresii regulate
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const resultMessage = document.getElementById("resultMessage");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    if (emailRegex.test(emailValue)) {
        emailError.textContent = "";
        resultMessage.textContent = "The email address is valid!";
    } else {
        emailError.textContent = "Please enter a valid email address.";
        resultMessage.textContent = "";
    }
});