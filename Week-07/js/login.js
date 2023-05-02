var URL = "https://api-rest-server.vercel.app/login";
var emailInput = document.getElementById("email");
var emailError = document.getElementById("email-error-text");
var passwordInput = document.getElementById("password");
var passwordError = document.getElementById("pass-error");
var loginBtn = document.getElementById("login-btn");

function validateEmail(email) {
  const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return emailExpression.test(email);
}

function isLetter(char) {
  var ascii = char.toUpperCase().charCodeAt(0);
  return ascii > 64 && ascii < 91;
}

function hasLetter(string) {
  var letter = false;

  for (var i = 0; i < string.length; i++) {
    if (isLetter(string.charAt(i))) {
      letter = true;
    }
  }
  return letter;
}

function hasNumber(string) {
  var number = false;

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
      number = true;
    }
  }
  return number;
}

function validatePassword(pass) {
  var isValid = false;

  if (pass.length > 7 && hasNumber(pass) && hasLetter(pass)) {
    for (let i = 0; i < pass.length; i++) {
      if (hasLetter(pass.charAt(i)) || hasNumber(pass.charAt(i))) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
  }
  return isValid;
}

function showError(input, inputError) {
  input.classList.add("input-error");
  inputError.classList.remove("hidden");
}

function removeError(input, inputError) {
  input.classList.remove("input-error");
  inputError.classList.add("hidden");
}

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

emailInput.addEventListener("focus", function () {
  removeError(emailInput, emailError);
});

passwordInput.addEventListener("focus", function () {
  if (!validatePassword(passwordInput.value)) {
    removeError(passwordInput, passwordError);
  }
});

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  if (
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value)
  ) {
    fetch(
      URL + "?email=" + emailInput.value + "&password=" + passwordInput.value
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        alert(data.msg);
      })
      .catch(function (err) {
        alert(err);
      });
  } else {
    alert("Error, Please check the fields.");
  }
});
