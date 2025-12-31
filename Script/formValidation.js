//form validation
let emailInput = document.getElementById('emailInput');
let messageInput = document.getElementById('messageInput');
let submitBtn = document.getElementById('submitBtn');
let nameInput = document.getElementById('nameInput');
let isValid = true;
submitBtn.onclick = function validateForm() {
    // name validation
    if (nameInput.value.trim() === ""|| nameInput.value.length < 3) {
        isValid = false;
        nameInput.classList.add("is-invalid");
    }else {
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
    }
    // email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add("is-invalid");
    }else{
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
    }
    // message validation
    if (messageInput.value.trim() === "" || messageInput.value.length < 10) {
        isValid = false;
        messageInput.classList.add("is-invalid");
    }else {
        messageInput.classList.remove("is-invalid");
        messageInput.classList.add("is-valid");
    }
    if (isValid) {
        alert("Form submitted successfully!");
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        nameInput.classList.remove("is-valid");
        emailInput.classList.remove("is-valid");
        messageInput.classList.remove("is-valid");
    }
};