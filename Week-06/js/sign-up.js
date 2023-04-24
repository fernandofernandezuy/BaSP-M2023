//Variables declaration
var nameInput = document.getElementById("name");
var nameError = document.getElementById("name-error");
var surname = document.getElementById("surname");
var surnameError = document.getElementById("surname-error")
var dni = document.getElementById("dni");
var dniError = document.getElementById("dni-error")
var birthDate = document.getElementById("birth-date");
var dateError = document.getElementById("date-error")
var phone = document.getElementById("phone");
var phoneError = document.getElementById("phone-error");
var address = document.getElementById("address");
var addressError = document.getElementById("address-error");
var town = document.getElementById("town");
var townError = document.getElementById("town-error");
var postalCode = document.getElementById("postal-code");
var postalCodeError = document.getElementById("postal-code-error");
var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
var pass = document.getElementById("password");
var phoneError = document.getElementById("phone-error");
var repeatPass = document.getElementById("repeat-password");
var phoneError = document.getElementById("phone-error");

function isLetter(char) {
  var ascii = char.toUpperCase().charCodeAt(0);
  return ascii > 64 && ascii < 91; //Takes a character as a parameter and return true if the character is a letter.
}

function hasLetter(string) {
  var letter = false;

  for (var i = 0; i < string.length; i++) {
    if (isLetter(string.charAt(i))) {
      letter = true;
    }
  }
  return letter; //return true if the string has a letter.
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
  return letter && nal; //return true if the string has only letters.
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
  return num && nan; //return true if the string has only numbers.
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

//Functions for validations
function validateName(name) {
  return onlyLetters(name) && name.length > 2;
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

    return validateDay(day) && validateMonth(month) && validateYear(year); // Return true if the paramater recibed is type date mm/dd/yyyy
  }
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
      } else if (address.charCodeAt(i) >= 48 && address.charCodeAt(i) <= 57) {
        number = true;
      } else if (address.charCodeAt(i) === 32) {
        space = true
      } else {
        other = false
      }
    } 
    return letter && number && space && other;
  }
};

function validateTown(town) {
  return town.length > 3 && isAlphanumeric(town);
}

function validatePostalCode(postalCode) {
  return (
    postalCode.length > 3 && postalCode.length < 6 && onlyNumbers(postalCode)
  );
}

function validateEmail(email) {
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return emailExpression.test(email); //return true if the email has a valid format.
}

function validatePassword(pass) {
  return pass.length > 7 && isAlphanumeric(pass);
}

//Functions that show or remove errors in the HTML.
function showError(input, inputError) {
  input.classList.add("input-error");
  inputError.classList.remove("hidden");
}

function removeError(input, inputError) {
  input.classList.remove("input-error");
  inputError.classList.add("hidden");
}

//Name validation
nameInput.addEventListener("blur", function () {
  if (!validateName(nameInput.value)) {
    showError(nameInput, nameError);
  }
});

nameInput.addEventListener("focus", function () {
  removeError(nameInput, nameError);
});

//Surame validation
surname.addEventListener("blur", function () {
  if (!validateName(surname.value)) {
    showError(surname, surnameError);
  }
});

surname.addEventListener("focus", function () {
  removeError(surname, surnameError);
});

//DNI validation
dni.addEventListener("blur", function () {
  if (!validateDni(dni.value)) {
    showError(dni, dniError);
  }
});

dni.addEventListener("focus", function () {
  removeError(dni, dniError);
});

//Birth date validation
birthDate.addEventListener("blur", function () {
  if (!validateBirthDate(birthDate.value)) {
    showError(birthDate, dateError);
  }
});

birthDate.addEventListener("focus", function () {
  removeError(birthDate, dateError);
});

//Phone validation
phone.addEventListener("blur", function () {
  if (!validatePhone(phone.value)) {
    showError(phone, phoneError);
  }
});

phone.addEventListener("focus", function () {
  removeError(phone, phoneError);
});

//Addres validation
address.addEventListener("blur", function () {
  if (!validateAddress(address.value)) {
    showError(address, addressError);
  }
});

address.addEventListener("focus", function () {
  removeError(address, addressError);
});

//Email validation
email.addEventListener("blur", function () {
  if (!validateEmail(email.value)) {
    showError(email, emailError);
  }
});

email.addEventListener("focus", function () {
  removeError(email, emailError);
});
