'use strict'

// DOM - Document Object Model
function cambiarColor(color){
  caja.style.background = color;
}
var valor;
/*
var caja = document.getElementById('micaja');
console.log(caja);
caja.innerHTML= "Nuevo texto";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "while";
caja.style.className = "Hola hola2";
*/
var allDiv = document.getElementsByTagName('div');
for(valor in allDiv){
  var parrafo = document.createElement("p");
  var texto = document.createElement(allDiv[valor].textContent);
  parrafo.appendChild(texto);
  document.querySelector('#miSeccion').appendChild(parrafo);

}
