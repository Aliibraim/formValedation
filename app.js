
  function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("username-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");
    var isValid = true;

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (username === "") {
      usernameError.textContent = "Username is required";
      isValid = false;
    }

    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email address";
      isValid = false;
    }

    if (password === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long";
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    // Very basic email validation, you can use more complex regex for validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }