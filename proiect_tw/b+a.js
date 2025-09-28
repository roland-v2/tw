// Dom manipulation - class
const ba = document.getElementsByClassName("beforeafter");
for (let i = 0; i < ba.length; i++) {
    ba[i].style.color = "lightgrey";
}

// folosirea și modificarea evenimentelor generate de mouse si tastatură
// modificare de prorietati
// folosirea target
const images = document.querySelectorAll("#image1, #image2, #image3, #image4");
images.forEach((image) => {
    image.addEventListener("mouseover", (event) => {
        event.target.style.border = "2px solid grey";
        event.target.style.boxShadow = "0 0 10px #9ecaed";
        event.stopPropagation();
    });

    image.addEventListener("mouseout", (event) => {
        event.target.style.border = "";
        event.target.style.boxShadow = "";
        event.stopPropagation();
    });
});

document.addEventListener("keydown", (event) => {
    image1.style.border = "2px solid grey";
    image1.style.boxShadow = "0 0 10px #9ecaed";
    image2.style.border = "2px solid grey";
    image2.style.boxShadow = "0 0 10px #9ecaed";
    image3.style.border = "2px solid grey";
    image3.style.boxShadow = "0 0 10px #9ecaed";
    image4.style.border = "2px solid grey";
    image4.style.boxShadow = "0 0 10px #9ecaed";
});
document.addEventListener("keyup", (event) => {
    image1.style.border = "";
    image1.style.boxShadow = "";
    image2.style.border = "";
    image2.style.boxShadow = "";
    image3.style.border = "";
    image3.style.boxShadow = "";
    image4.style.border = "";
    image4.style.boxShadow = "";
});