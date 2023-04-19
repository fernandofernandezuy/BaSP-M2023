console.log("--EXERCISE 2: STRINGS");

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log("-Exercise 2.a:");
var helicopter = "helicopter";
console.log(helicopter.toUpperCase());

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.b:");
var friendship = "Friendship";
var shortFriendship = friendship.substring(0, 5);
console.log(shortFriendship);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.c:");
var fabricated = "Fabricated";
var shortFabricated = fabricated.substring(7, 10);
console.log(shortFabricated);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log("-Exercise 2.d:");
var obligation = "obligAtion";
var camelObligation =
  obligation.substring(0, 1).toUpperCase() +
  obligation.substring(1, 10).toLowerCase();
console.log(camelObligation);

// e. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.e:");
var greeting = "Hello World";
var whiteSpace = greeting.indexOf(" ");
console.log(whiteSpace);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log("-Exercise 2.f:");
var firstMonths = "january february";
var space = firstMonths.indexOf(" ");
var camelMonth1 =
  firstMonths.substring(0, 1).toUpperCase() +
  firstMonths.substring(1, space).toLowerCase();
var camelMonth2 =
  firstMonths.substring(space + 1, space + 2).toUpperCase() +
  firstMonths.substring(space + 2, firstMonths.length).toLowerCase();
console.log(camelMonth1 + " " + camelMonth2);
