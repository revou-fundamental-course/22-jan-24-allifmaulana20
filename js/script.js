function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("All fields must be filled out");
    } else {
        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset();
    }
}
