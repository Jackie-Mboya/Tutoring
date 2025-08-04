document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const submitButton = document.getElementById("submitButton");
  
    // Input elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const termsCheckbox = document.getElementById("terms");
  
    // Error messages
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    // Validation functions
    function validateName() {
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        return false;
      }
      nameError.style.display = "none";
      return true;
    }
  
    function validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email.";
        emailError.style.display = "block";
        return false;
      }
      emailError.style.display = "none";
      return true;
    }
  
    function validatePassword() {
      if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordError.style.display = "block";
        return false;
      }
      passwordError.style.display = "none";
      return true;
    }
  
    function toggleSubmitButton() {
      const isFormValid = validateName() && validateEmail() && validatePassword() && termsCheckbox.checked;
      submitButton.disabled = !isFormValid;
    }
  
    // Event listeners
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
    termsCheckbox.addEventListener("change", toggleSubmitButton);
    form.addEventListener("input", toggleSubmitButton);
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateName() && validateEmail() && validatePassword() && termsCheckbox.checked) {
        alert("Form submitted successfully!");
      }
    });
  });
  