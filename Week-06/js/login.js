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

function isLetter(char) {
  var ascii = char.toUpperCase().charCodeAt(0);
  return ascii > 64 && ascii < 91; //Takes a character as a parameter and return true if the character is a letter.
}

function hasLetter(string) {
  var letter = false;
  var contLetter = 0;

  for (var i = 0; i < string.length; i++) {
    if (isLetter(string.charAt(i))) {
      letter = true;
      contLetter++;
    }
  }
  return letter; //return true if the string has a letter.
}

function isAlphanumeric(string) {
  var letter = false;
  var number = false;
  var other = true;

  for (let i = 0; i < string.length; i++) {
    if (isLetter(string.charAt(i))) {
      letter = true;
    } else if (hasNumber(string.charAt(i))) {
      number = true;
    } else {
      other = false;
    }
  }
  return letter && number && other;
}

function validatePassword(pass) {
  return pass.length > 7 && isAlphanumeric(pass);
}


function showError(input, inputError) {
  input.classList.add("input-error");
  inputError.classList.remove("hidden");
}

function removeError(input, inputError) {
  input.classList.remove("input-error");
  inputError.classList.add("hidden");
}

// Blur events of the inputs
emailInput.addEventListener("blur", function () {
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, emailError);
  }
});

passwordInput.addEventListener("blur", function () {
  if (!validatePassword(passwordInput.value)) {
    showError(passwordInput, passwordError);
  }
});

// Focus events of the inputs.
emailInput.addEventListener("focus", function () {
    removeError(emailInput, emailError);
  });
  
passwordInput.addEventListener("focus", function () {
  if (!validatePassword(passwordInput.value)) {
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
