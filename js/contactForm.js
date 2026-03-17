const form = document.getElementById("contactForm");
const message = document.getElementById("confirmationMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    message.style.display = "block";

    form.reset();

    setTimeout(function(){
        message.style.display = "none";
    },3000);

});