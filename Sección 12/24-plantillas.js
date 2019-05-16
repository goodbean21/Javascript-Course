'use strict'

// Plantillas de texto


var nombre = prompt("Nombre:");
var apellidos = prompt("Apellidos:");

var texto = `
  <h1> Hola qué tal </h1>
  <h3> Mi nombre es: ${nombre} </h3>
  <h4> Mi apellido es: ${apellidos} </h4>
 `;

document.write(texto);
