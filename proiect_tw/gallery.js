// crearea si stergerea de elemente html
function create(tag, text) {
    var elnou = document.createElement(tag);
    var textnou = document.createTextNode(text);
    elnou.appendChild(textnou);
    return elnou;
 }
 window.onload=function() {
    var list = document.getElementById("gallery-text");
    var el1 = create("p","Have fun exploring!");
    list.appendChild(el1);
}

const power = document.getElementById("power");
power.remove();