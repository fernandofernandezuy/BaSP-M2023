console.log("--EXERCISE 6: FUNCTIONS");

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
 y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log("-Exercise 6.a:");
function sum(number1, number2) {
  return number1 + number2;
}
var aResult = sum(12, 32);
console.log(aResult);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es
 un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log("-Exercise 6.b:");
function sum(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    alert("Error. One or the two parameters isnt a number");
    return NaN;
  } else {
    return number1 + number2;
  }
}
var bResult = sum("hola", 32);
console.log(bResult);

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log("-Exercise 6.c:");
function validateInteger(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
var cResult = validateInteger(3);
console.log(cResult);

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide 
que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado). */

console.log("-Exercise 6.d:");
function sumCopy(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    alert("Error. One or the two parameters isnt a number");
    return NaN;
  } else {
    var result = number1 + number2;
    if (!validateInteger(result)) {
      alert("Warning. One or the two parameters is an integer");
      result = Math.round(result);
    }
    return result;
  }
}
var dResult = sumCopy(22, 10.5);
console.log(dResult);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que 
  todo siga funcionando igual que en el apartado anterior. */

console.log("-Exercise 6.e:");
function validateSum(number1, number2) {
  var result = number1 + number2;
  if (!validateInteger(result)) {
    alert("Warning. One or the two parameters is an integer");
    result = Math.round(result);
  }
  return result;
}

function sumCopy2(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    alert("Error. One or the two parameters isnt a number");
    return NaN;
  } else {
    return validateSum(number1, number2);
  }
}

var fResult = sumCopy2(22, 10.5);
console.log(fResult);
