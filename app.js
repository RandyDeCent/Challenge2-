

function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}



const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const message = document.getElementById("message").value;

    // Do something with the form data 
    console.log(email, firstName, lastName, phoneNumber, message);
});
