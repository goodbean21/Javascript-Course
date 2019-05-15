'use strict'

/*
El programa dice si un número es par o impar.
1. Ventana prompt
2. Si la entrada no es valida, pide el número de nuevo.
*/

let numero = NaN;

while(isNaN(numero)) numero = parseInt(prompt("Introduce un número:", 0));

(numero % 2 == 0) ? alert('Es un número par') : alert('Es un número impar');
