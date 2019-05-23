'use strict'

// DOM - Documento Object Model

function cambiarColor(color = "white"){
  caja.style.color = color;           // Cambia el color del texto

}

let caja = document.getElementById("micaja");
let textoDeLaCaja = caja.innerHTML;     // Obtiene el texto interno del objeto DOM
console.log(textoDeLaCaja);

caja.innerHTML = "Nuevo Texto";        // Modifica el texto dentro de la caja
console.log(caja.innerHTML);

caja.style.background = "red";        // Cambios de estilo al objeto DOM (BG)
caja.style.padding = "20px"           // Tamaño del DOM
caja.className = "hola";              // Se le agrega una clase al objeto DOM
cambiarColor();
