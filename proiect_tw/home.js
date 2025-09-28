// Dom manipulation - tag, atribute
const paragraphs = document.getElementsByTagName("footer");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "lightgrey";
}

const buttonss = document.querySelectorAll('[class="button"]');
buttonss.forEach ( el => {
    el.style.backgroundColor = "black";
});

// inputuri functionale
// stopPropagtion
// localStorage
const input = document.getElementById("myInput");
const hello = document.getElementById("hello");
const clickDiv = document.getElementById("clickDiv");
const savedName = localStorage.getItem("name");

if (savedName) {
    hello.innerHTML = `<p>Hello, ${savedName}!</p>`;
    input.value = savedName;
}
input.addEventListener("input", () => {
    const name = input.value;
    hello.innerHTML = `<p>Hello, ${name}!</p>`;
    localStorage.setItem("name", name);
});
input.addEventListener("click", (event) => {
    event.stopPropagation();
});
clickDiv.addEventListener("click", () => {
    clickDiv.style.backgroundColor = "purple";
})

const ratingInput = document.getElementById("ratingInput");
const ratingValue = document.getElementById("ratingValue");
ratingInput.addEventListener("input", () => {
    ratingValue.textContent = `Rating: ${ratingInput.value}`;
});

// setInterval - live clock
// metoda Date
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const clock = document.getElementById("clock");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// getComputeedStyle
const helloSize = document.getElementById("hello");
const clockSize = document.getElementById("clock");
const clockFontSize = getComputedStyle(helloSize).fontSize;
clockSize.style.fontSize = clockFontSize;

// cereri ajax cu preluare a datelor din fisier json
document.getElementById("changeColorButton").addEventListener("click", function () {
    fetch("colors.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const colors = data.colors;
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.getElementById("text").style.color = randomColor;
        })
});

window.onload = function() {
    clock();
function clock() {
    const canvas = document.getElementById("clockCanvas");
    if (canvas.getContext) {
       const ctx = canvas.getContext("2d");
       ctx.beginPath();
       ctx.arc(50,50,45,0,360);
       ctx.strokeStyle = "white";
       ctx.lineWidth = "5";
       ctx.stroke();
       ctx.closePath();
       ctx.beginPath();
       ctx.arc(50,50,35,0,360);
       ctx.fillStyle = "white";
       ctx.lineWidth = "5";
       ctx.stroke();
       ctx.closePath();
       ctx.beginPath();
       ctx.moveTo(50,50);
       ctx.lineTo(75,50);
       ctx.strokeStyle = "white";
       ctx.stroke();
       ctx.closePath();
       ctx.beginPath();
       ctx.moveTo(50,50);
       ctx.lineTo(30,30);
       ctx.strokeStyle = "white";
       ctx.stroke();
       ctx.closePath();
       
    }
 }
}