'use strict'

/*
Mostrar todos los números impares entre dos números
*/

var num1 = parseInt(prompt("Introduce un número:",0));
var num2 = parseInt(prompt("Introduce otro número:",0));

while(num1 < num2){
  if(num1%2 != 0) document.write(num1 + " es impar</br>");
  num1++;

}
