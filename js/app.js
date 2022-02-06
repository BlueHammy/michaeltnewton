'use strict'

const switcher = document.querySelector(".bttn"); //gets button reference

switcher.addEventListener('click', function() {
document.body.classList.toggle('theme-dark') //toggle theme with event listener

var className = document.body.className;
if(className == "theme-light") {
    this.textContent = "Dark";
}
else{
    this.textContent = "Light";
}

console.log('Current Class Name: ' + className); //logs to console

});


const homeButton = document.querySelector(".homeBttn");

homeButton.onclick = function () {
    location.href = "www.michaeltnewton.com";
};


const contactButton = document.querySelector(".contactBttn");

contactButton.onclick = function () {
    location.href = "www.michaeltnewton/views/pages/contactme.html";
};

//const afterWerkButton