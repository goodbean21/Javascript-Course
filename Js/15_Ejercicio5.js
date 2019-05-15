'use strict'
/*
Muestra todo los números divisores de un número introducido
*/
var num = parseInt(prompt("Introduzca un número", 1));

for(var i = 1; i <= num; i++)
  if(!(num%i)) console.log(i);
