'use strict'
/*
Un programa que meustre todos los números enteros entre
dos números
*/

var num1 = parseInt(prompt("Introduzca un número: ", 0));
var num2 = parseInt(prompt("Introduzca otro número: ", 0));

document.write("<h2> De" + num1 +" a " + num2 + "</h2>")

for(var i = num1; i <= num2; i++){
  document.write(i +"<br/>")
}
