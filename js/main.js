// funcation for form validation

function validateForm() {
    const errors = [];
    const data = {};

    const fullName = document.getElementById("fname");
    const email01 = document.getElementById("email");
    const message = document.getElementById("text");

    //......................................................//

    // First and Last name validation
    if (fullName.value !== null) {
        data.fname = fullName.value;
    } else {
        errors.push("Full Name is missing");
    }

    //......................................................//

    // Email ID validation
    if (email01.value !== "") {
        var emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailcheck.test(email01.value)) {
            data.email = email01.value;
        } else {
            errors.push("Email is invalid");
        }
    } else {
        errors.push("Email is missing");
    }

    //......................................................//

    // Message text validation
    if (message.value !== "") {
        data.text = message.value;
    } else {
        errors.push("Write a message");
    }

    if (errors.length > 0) {
        console.log("Errors:", errors);
    } else {
        console.log("Data:", data);
        fullName.value = "";
        email01.value = "";
        message.value = "";
    }
}

document.getElementById("submit-button").addEventListener("click", function() {
    validateForm();
});
