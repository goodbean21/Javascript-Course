'use strict'

/*
  Una calculadora:
    1. Pida los números por pantalla
    2. Si se mete algun número mal se tienen que vovler a pedir
    3. En el <body> de la página debe moestrar el resultado de la operación
*/

var numero1 = NaN;
var numero2 = NaN;
let resultado;

while(isNaN(numero1)) numero1 = parseInt(prompt("Introduzca un número", 0));
while(isNaN(numero2)) numero2 = parseInt(prompt("Introduzca un número", 0));

const sum = numero1 + numero2;
const resta = numero1 - numero1;
const multplicación = numero1 * numero2;
const división = numero1 / numero2;

resultado = "La suma entre los dos números es: " + sum + "<br/>"+
            "La resta entre los dos números es: " + resta + "<br/>" +
            "La multplicación entre los dos números es: " + multplicación + "<br/>"+
            "La división entre los dos números es: " + división;

document.write(resultado);


let resultadoCMD = "La suma entre los dos números es: " + sum + "\n"+
            "La resta entre los dos números es: " + resta + "\n" +
            "La multplicación entre los dos números es: " + multplicación + "\n"+
            "La división entre los dos números es: " + división;

alert(resultadoCMD);
