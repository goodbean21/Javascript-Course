'use strict'
/*
  La tabla de multiplicar de un número introducido por pantalla
*/


var numero = parseInt(prompt("¿De qué número quieres la tabla?", 1));

for(let i = 1; i <= 10; i++)
  document.write(numero + " x " + i + " = " + i*numero + "<br>");
  
