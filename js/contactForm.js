/*
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
*/
const form = document.getElementById("contactForm");
const message = document.getElementById("confirmationMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const userMessage = form.message.value.trim();

    let valid = true;

    // reset borders
    form.name.style.border = "";
    form.email.style.border = "";
    form.message.style.border = "";

    // name check
    if (name === "") {
        form.name.style.border = "2px solid red";
        valid = false;
    }

    // email check
    if (email === "") {
        form.email.style.border = "2px solid red";
        valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        form.email.style.border = "2px solid red";
        valid = false;
    }

    // message check
    if (userMessage === "") {
        form.message.style.border = "2px solid red";
        valid = false;
    } else if (userMessage.length < 2) {
        form.message.style.border = "2px solid red";
        valid = false;
    }

    // if valid
    if (valid) {

        message.textContent = "Thanks! I'll get back to you soon 😊";
        message.style.display = "block";
        message.style.color = "green";

        form.reset();

        setTimeout(function(){
            message.style.display = "none";
        },3000);

    } else {

        message.textContent = "Almost there! just fix the highlighted fields ";
        message.style.display = "block";
        message.style.color = "red";

    }

});