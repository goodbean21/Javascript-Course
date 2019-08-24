'use strict'

// DOM - Documento Object Model

function cambiarColor(color = "white"){
  caja.style.color = color;           // Cambia el color del texto

}

// Conseguir Elementos con Id contreto

// Seleción de elemento por id
// let caja = document.getElementById("micaja");

// Selector con querySelector
let caja = document.querySelector("#micaja");

let textoDeLaCaja = caja.innerHTML;     // Obtiene el texto interno del objeto DOM
console.log(textoDeLaCaja);

caja.innerHTML = "Nuevo Texto";        // Modifica el texto dentro de la caja
console.log(caja.innerHTML);

caja.style.background = "red";        // Cambios de estilo al objeto DOM (BG)
caja.style.padding = "20px"           // Tamaño del DOM
caja.className = "hola";              // Se le agrega una clase al objeto DOM
cambiarColor();


// Conseguir los elementos por etiquetas
var todoLosDivs = document.getElementsByTagName('div');
console.log(todoLosDivs);

console.log(todoLosDivs[2].textContent);

todoLosDivs[2].innerHTML = "Nuevo Texto";
console.log(todoLosDivs[2].textContent);

// Conseguir elementos por clase
var divsRojos = document.getElementsByClassName('rojo');
for(let div in divsRojos)
  if(divsRojos[div].className == "rojo") divsRojos[div].style.background = "red";

var divsAmarillos = document.getElementsByClassName('amarillo');
for(let div in divsAmarillos){
  if(divsAmarillos[div].className == "amarillo") divsAmarillos[div].style.background = "yellow";
}

// Query Selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);
