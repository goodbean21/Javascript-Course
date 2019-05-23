'use strict'

/*
  1. Pida 6 números por pantalla y salvarlos en un arreglo
  2. Mostrar el arreglo entero en el cuerpo de la página y consola
  3. Sorteo del arreglo y mostrarlo
  4. Invertir el orden y mostrarlo
  5. Mostrar cuántos elementos tiene el arreglo
  6. Busqueda de un valor introducido por el usuario, nos diga si esta y su indice
*/
const size = 6;
var numeros = new Array(size);

function mostrarArregloPagina(elementos, customText = ""){
  /*
    Muestra un arreglo como una lista dentro del cuerpo de la página con un header
    que indico la caracteristica de la lista
    :param elementos: Es un arreglo de números enteros o flotantess
    :param customText: Es una cadena de texto que se agregará al header por default
                      viene en blanco.
  */
  document.write("<h2> Contenido del arreglo "+ customText + "</h2><ul>");
  numeros.forEach(elemento => document.write("<li>"  + elemento + "</il><br/>"));
  document.write("</ul>");

}

for(let i = 0; i < size; i++){
  while(isNaN(numeros[i]))
    numeros[i] = parseInt(prompt("Inserte un número: ", 0));
}

// Agregar a cuerpo de la página y en consola
mostrarArregloPagina(numeros);
console.log(numeros);

// Sorteo
numeros.sort();
mostrarArregloPagina(numeros, "ordenado");
console.log(numeros);

// Invertir el arreglo
numeros.reverse();
mostrarArregloPagina(numeros, "invertido");

// Longitud
document.write("<h2>El arreglo tiene una dimensión: " + size + "</h2>");
console.log(size);

// Busqueda
var elementoUsuario;
while(isNaN(elementoUsuario)) elementoUsuario = parseInt(prompt("Cuál elemento quieres buscar: ", 0));
var numeroEncontrado = numeros.find(elemento => elemento == elementoUsuario);
var indNumeroEncontrado = numeros.indexOf(elementoUsuario);

document.write("<h2> Posición de la busqueda: " + indNumeroEncontrado + "</h2>");
(!(typeof numeroEncontrado === 'undefined')) ?
  document.write("<h2> Elemento encontrado de la busqueda: " + numeroEncontrado + "</h2>") :
  document.write("<h2> No encontrado </h2>")
