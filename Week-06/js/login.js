// Variable Declarations
var emailInput = document.getElementById("email");
var emailError = document.getElementById("email-error-text");
var passwordInput = document.getElementById("password");
var passwordError = document.getElementById("pass-error");
var loginBtn = document.getElementById("login-btn");

// Functions Declarations
function validateEmail(email) {
  const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return emailExpression.test(email);
}

function validatePassword(pass) {
  var password = pass.value;
  var letter = false;
  var number = false;

  for (let i = 0; i < password.length; i++) {
    if (isNaN(password.charAt(i))) {
      letter = true;
    } else {
      number = true;
    }
  }
  if (letter && number) {
    return true;
  }
}

function showError(input, inputError) {
  input.classList.add("input-error");
  inputError.classList.remove("hidden");
}

function removeError(input, inputError) {
  input.classList.remove("input-error");
  inputError.classList.add("hidden");
}

// Blur events of the inputs, if the
emailInput.addEventListener("blur", function () {
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, emailError);
  }
});

passwordInput.addEventListener("blur", function () {
  if (!validatePassword(passwordInput)) {
    showError(passwordInput, passwordError);
  }
});

// Focus events of the inputs.
emailInput.addEventListener("focus", function () {
    removeError(emailInput, emailError);
  });
  
passwordInput.addEventListener("focus", function () {
  if (!validatePassword(passwordInput)) {
    removeError(passwordInput, passwordError);
  }
});

// Click event of the login button.
document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault();
    if (validateEmail(emailInput.value) && validatePassword(passwordInput)) {
        alert(" Email: " + emailInput.value + "\n Password: " + passwordInput.value);
    } else {
        alert("Error, Please check the fields.")
    }
});
