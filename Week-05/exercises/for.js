console.log("--EXERCISE 5: FOR");

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log("-Exercise 5.a:");
let musicalInstruments = ["drums", "piano", "flute", "guitar", "cello"];
for (let i = 0; i < musicalInstruments.length; i++) {
  var instrument = musicalInstruments[i];
  alert(instrument);
}
console.log(musicalInstruments);

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

console.log("-Exercise 5.b:");
for (let i = 0; i < musicalInstruments.length; i++) {
  var instrument = musicalInstruments[i];
  musicalInstruments[i] =
    instrument.substring(0, 1).toUpperCase() +
    instrument.substring(1, instrument.length + 1);
  alert(musicalInstruments[i]);
}
console.log(musicalInstruments);

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir 
guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa. */

console.log("-Exercise 5.c:");
var sentence = "";
for (let i = 0; i < musicalInstruments.length; i++) {
  var instrument = musicalInstruments[i];
  sentence = sentence + instrument;
}
console.log(sentence);
