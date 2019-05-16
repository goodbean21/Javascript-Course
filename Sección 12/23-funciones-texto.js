'use strict'

// Transformación de strings

var numero = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = " an okay curso          ";

console.log(typeof numero.toString());

console.log(texto1.toUpperCase());
console.log(texto1.toLowerCase());

// Calcular la longitud de la cadena
console.log(texto2.length);

// Concatenación
var texto = texto1 + texto2;
console.log(texto);
console.log(texto1.concat(texto2));

// Métodos de Strings
console.log(texto1.indexOf("curso"));
console.log(texto.lastIndexOf("curso"));
console.log(texto1.search("curso"));
console.log(texto.match(/curso/g));
console.log(texto.substr(14, 5));
console.log(texto.charAt(14));
console.log(texto.startsWith("Bienvenido"));
console.log(texto.endsWith("JS"));
console.log(texto.includes("curso"));

// Métodos de reemplazo
console.log(texto.replace("Bienvenido", "Bye"));
console.log(texto.slice(14, 22));
console.log(texto.split(" "));
console.log(texto.trim());
