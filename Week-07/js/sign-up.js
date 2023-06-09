var URL = "https://api-rest-server.vercel.app/signup/";
var info = [];
var nameInput = document.getElementById("name");
var nameError = document.getElementById("name-error");
var surname = document.getElementById("surname");
var surnameError = document.getElementById("surname-error");
var dni = document.getElementById("dni");
var dniError = document.getElementById("dni-error");
var birthDate = document.getElementById("birth-date");
var dateError = document.getElementById("date-error");
var phone = document.getElementById("phone");
var phoneError = document.getElementById("phone-error");
var address = document.getElementById("address");
var addressError = document.getElementById("address-error");
var locality = document.getElementById("locality");
var localityError = document.getElementById("locality-error");
var postalCode = document.getElementById("postal-code");
var postalCodeError = document.getElementById("postal-code-error");
var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
var pass = document.getElementById("password");
var passError = document.getElementById("pass-error");
var repeatPass = document.getElementById("repeat-pass");
var repeatPassError = document.getElementById("repeat-pass-error");
var inputs = [
  nameInput,
  surname,
  dni,
  birthDate,
  phone,
  address,
  locality,
  postalCode,
  email,
  pass,
  repeatPass,
];
var inputsErrors = [
  nameError,
  surnameError,
  dniError,
  dateError,
  phoneError,
  addressError,
  localityError,
  postalCodeError,
  emailError,
  passError,
  repeatPassError,
];

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

function contLetter(string) {
  var letters = 0;

  for (var i = 0; i < string.length; i++) {
    if (isLetter(string.charAt(i))) {
      letters++;
    }
  }
  return letters;
}

function onlyLetters(string) {
  var letter = false;
  var nal = true;

  for (let i = 0; i < string.length; i++) {
    if (hasLetter(string.charAt(i))) {
      letter = true;
    } else {
      nal = false;
    }
  }
  return letter && nal;
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

function onlyNumbers(string) {
  var num = false;
  var nan = true;

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
      num = true;
    } else {
      nan = false;
    }
  }
  return num && nan;
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

function lettersAndSpace(string) {
  var letter = false;
  var other = true;

  for (let i = 0; i < string.length; i++) {
    if (isLetter(string.charAt(i))) {
      letter = true;
    } else if (string.charCodeAt(i) === 32 && string.indexOf("  ") === -1) {
      other = true;
    } else {
      other = false;
    }
  }
  return letter && other;
}

function validateName(name) {
  if (name.trim() == name) {
    return onlyLetters(name) && name.length > 2;
  }
}

function validateSurname(surname) {
  if (surname.trim() == surname) {
    return lettersAndSpace(surname) && contLetter(surname) > 2;
  }
}

function validateDni(dni) {
  return onlyNumbers(dni) && dni.length > 6;
}

function validateDay(day) {
  if (day[0] == 3 && onlyNumbers(day)) {
    return day[1] >= 0 && day[1] <= 1;
  } else if (day[0] >= 0 && day[0] < 3 && day.length > 1) {
    return true;
  } else {
    return false;
  }
}

function validateMonth(month) {
  if (month.length === 2 && onlyNumbers(month)) {
    if (month[0] == 1) {
      return month[1] >= 0 && month[1] <= 2;
    } else if (month[0] >= 0 && month[0] <= 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function validateYear(year) {
  if (year.length === 4 && onlyNumbers(year)) {
    if (year[0] == 1) {
      return year[1] == 9 && year[2] > 1;
    } else if (year[0] == 2) {
      return year[1] == 0 && year[2] == 0 && year[3] < 6;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function validateBirthDate(birthDate) {
  if (birthDate.length === 10 && birthDate[2] === "/" && birthDate[5] === "/") {
    var day = birthDate.substring(0, 2);
    var month = birthDate.substring(3, 5);
    var year = birthDate.substring(6, 10);

    return validateDay(day) && validateMonth(month) && validateYear(year);
  }
}

function changeDateFormat(date) {
  let parts = date.split("/");
  let newDate = parts[1] + "/" + parts[0] + "/" + parts[2];
  return newDate;
}

function validatePhone(phone) {
  return onlyNumbers(phone) && phone.length === 10;
}

function validateAddress(address) {
  if (address.length > 4 && address.trim() == address) {
    var letter = false;
    var number = false;
    var space = false;
    var other = true;

    for (let i = 0; i < address.length; i++) {
      if (isLetter(address.charAt(i))) {
        letter = true;
      } else if (
        hasNumber(address.charAt(i)) &&
        !hasLetter(address.charAt(i - 1)) &&
        !hasLetter(address.charAt(i + 1))
      ) {
        number = true;
      } else if (address.charCodeAt(i) === 32) {
        space = true;
      } else {
        other = false;
      }
    }
    return letter && number && space && other;
  }
}

function validateLocality(locality) {
  var letter = false;
  var contLetter = 0;
  var number = false;
  var space = false;
  var contSpace = 0;
  var other = true;

  for (let i = 0; i < locality.length; i++) {
    if (isLetter(locality.charAt(i))) {
      letter = true;
      contLetter++;
    } else if (
      hasNumber(locality.charAt(i)) &&
      !hasLetter(locality.charAt(i - 1)) &&
      !hasLetter(locality.charAt(i + 1))
    ) {
      number = true;
    } else if (locality.charAt(i) === " " && locality.indexOf("  ") === -1) {
      space = true;
      contSpace++;
    } else {
      other = false;
    }
  }

  if (contLetter >= 3 && contSpace == 1) {
    return letter && number && space && other;
  } else {
    return false;
  }
}

function validatePostalCode(postalCode) {
  return (
    postalCode.length > 3 && postalCode.length < 6 && onlyNumbers(postalCode)
  );
}

function validateEmail(email) {
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return emailExpression.test(email);
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

nameInput.addEventListener("blur", function () {
  if (!validateName(nameInput.value)) {
    showError(nameInput, nameError);
  }
});

nameInput.addEventListener("focus", function () {
  removeError(nameInput, nameError);
});

surname.addEventListener("blur", function () {
  if (!validateSurname(surname.value)) {
    showError(surname, surnameError);
  }
});

surname.addEventListener("focus", function () {
  removeError(surname, surnameError);
});

dni.addEventListener("blur", function () {
  if (!validateDni(dni.value)) {
    showError(dni, dniError);
  }
});

dni.addEventListener("focus", function () {
  removeError(dni, dniError);
});

birthDate.addEventListener("blur", function () {
  if (!validateBirthDate(birthDate.value)) {
    showError(birthDate, dateError);
  }
});

birthDate.addEventListener("focus", function () {
  removeError(birthDate, dateError);
});

phone.addEventListener("blur", function () {
  if (!validatePhone(phone.value)) {
    showError(phone, phoneError);
  }
});

phone.addEventListener("focus", function () {
  removeError(phone, phoneError);
});

address.addEventListener("blur", function () {
  if (!validateAddress(address.value)) {
    showError(address, addressError);
  }
});

address.addEventListener("focus", function () {
  removeError(address, addressError);
});

locality.addEventListener("blur", function () {
  if (!validateLocality(locality.value)) {
    showError(locality, localityError);
  }
});

locality.addEventListener("focus", function () {
  removeError(locality, localityError);
});

postalCode.addEventListener("blur", function () {
  if (!validatePostalCode(postalCode.value)) {
    showError(postalCode, postalCodeError);
  }
});

postalCode.addEventListener("focus", function () {
  removeError(postalCode, postalCodeError);
});

pass.addEventListener("blur", function () {
  if (!validatePassword(pass.value)) {
    showError(pass, passError);
  }
});

pass.addEventListener("focus", function () {
  removeError(pass, passError);
});

repeatPass.addEventListener("blur", function () {
  if (!validatePassword(repeatPass.value)) {
    showError(repeatPass, repeatPassError);
  }
});

repeatPass.addEventListener("focus", function () {
  removeError(repeatPass, repeatPassError);
});

email.addEventListener("blur", function () {
  if (!validateEmail(email.value)) {
    showError(email, emailError);
  }
});

email.addEventListener("focus", function () {
  removeError(email, emailError);
});

function mensaje(array) {
  var mensaje = "";
  for (var i = 0; i < array.length; i++) {
    mensaje += array[i] + "\n";
  }
  return mensaje;
}

nameInput.value = localStorage.getItem("name");
surname.value = localStorage.getItem("lastName");
address.value = localStorage.getItem("address");
dni.value = localStorage.getItem("dni");
pass.value = localStorage.getItem("password");
repeatPass.value = localStorage.getItem("password");
email.value = localStorage.getItem("email");
locality.value = localStorage.getItem("city");
postalCode.value = localStorage.getItem("zip");
phone.value = localStorage.getItem("phone");
birthDate.value = changeDateFormat(localStorage.getItem("dob"));

document.getElementById("reg-btn").addEventListener("click", function (e) {
  e.preventDefault();
  if (
    validatePassword(pass.value) &&
    validatePassword(repeatPass.value) &&
    repeatPass.value !== pass.value
  ) {
    alert("Error. Passwords doesn't match");
    pass.classList.add("input-error");
    repeatPass.classList.add("input-error");
  } else if (
    validateName(nameInput.value) &&
    validateSurname(surname.value) &&
    validateDni(dni.value) &&
    validateBirthDate(birthDate.value) &&
    validatePhone(phone.value) &&
    validateAddress(address.value) &&
    validateLocality(locality.value) &&
    validatePostalCode(postalCode.value) &&
    validateEmail(email.value)
  ) {
    fetch(
      URL +
        "?name=" +
        nameInput.value +
        "&lastName=" +
        surname.value +
        "&dni=" +
        dni.value +
        "&dob=" +
        changeDateFormat(birthDate.value) +
        "&phone=" +
        phone.value +
        "&address=" +
        address.value +
        "&city=" +
        locality.value +
        "&zip=" +
        postalCode.value +
        "&email=" +
        email.value +
        "&password=" +
        pass.value
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        info.push(data);
        var isValid = true;
        
        for (var i = 0; i < info.length; i++) {
          isValid = info[i].success;
          var message = "";
          for (var key in info[i].data) {
            message += key + ": ";
            message += info[i].data[key] + "\n";
            localStorage.setItem(key, info[i].data[key])
          }
        }
        if (isValid) {
          alert(message);
        } else {
          for (var i = 0; i < info.length; i++) {
            var errorMsg = "";
            for (const key in info[i].errors) {
              errorMsg += info[i].errors[key].msg + "\n";
            }
          }
          alert(errorMsg);
        }
      })
      .catch(function (err) {
        alert("Error: Route");
      });
  } else {
    alert("Error. Please check the fields.");
    for (let i = 0; i < inputs.length; i++) {
      var input = inputs[i];

      if (input.value === "") {
        input.classList.add("input-error");
        inputsErrors[i].classList.remove("hidden");
      }
    }
  }
});
