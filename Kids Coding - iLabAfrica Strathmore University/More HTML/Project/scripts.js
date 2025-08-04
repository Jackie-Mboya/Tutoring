document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");

    // Input elements
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const emailInput = document.getElementById("email");

    // Error message elements
    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");
    const emailError = document.getElementById("emailError");

    // Validation Functions
    const validateName = (name) => /^[a-zA-Z]+$/.test(name.trim());
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Event Listeners
    fnameInput.addEventListener("input", () => {
        if (validateName(fnameInput.value)) {
            fnameError.style.display = "none";
        } else {
            fnameError.style.display = "block";
        }
    });

    lnameInput.addEventListener("input", () => {
        if (validateName(lnameInput.value)) {
            lnameError.style.display = "none";
        } else {
            lnameError.style.display = "block";
        }
    });

    emailInput.addEventListener("input", () => {
        if (validateEmail(emailInput.value)) {
            emailError.style.display = "none";
        } else {
            emailError.style.display = "block";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission for validation
        const isFnameValid = validateName(fnameInput.value);
        const isLnameValid = validateName(lnameInput.value);
        const isEmailValid = validateEmail(emailInput.value);

        if (isFnameValid && isLnameValid && isEmailValid) {
            alert("Form submitted successfully!");
            form.submit(); // Submit if all validations pass
        } else {
            alert("Please correct the errors before submitting.");
        }
    });
});
