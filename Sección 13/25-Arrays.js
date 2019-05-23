'use strict'

// Arrays: Es una colección de tipos de datos

var array = ["Abel", "Luis", "María", 10, 0.33, true];
for (let datum of array) console.log(datum);

var objArray = new Array("PHP", "JS", "Go", "Java");

document.write('<ul>');
for (let lenguaje of objArray) document.write('<li>' + lenguaje + '</li>');
document.write('</ul>');

console.log(objArray[2]);

// Propiedades del objeto Array
console.log(array.length);      // Longitud de arreglo
console.log(objArray.length);

var elemento = -1;

while (isNaN(elemento) || elemento < 0 || elemento > array.length)
  elemento = parseInt(prompt("Qué elemento del arreglo (array) quieres:?", 0));

console.log(array[elemento]);

document.write('<ul>');
array.forEach((elemento, index, arr) => {
   document.write('<li>' + elemento + " con indice " + index +'</li>');
   console.log(arr);
});
document.write('</ul>');
