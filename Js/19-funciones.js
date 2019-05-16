'use strict'

/*
  Funciones: Es una agrupación reutilizable de un conjunto de instrucciones
*/


// Definir la función
function calculadora(numero1, numero2, mostrar = false){
  let suma = numero1 + numero2;
  let resta = numero1 - numero2;
  let multplicación = numero1 * numero2;
  let división = numero1 / numero2;

  console.log("Suma: " + suma);
  console.log("Resta: " + resta);
  console.log("multiplicar: "+ multplicación);
  console.log("División: " + división);

  return "Hola soy la calculadora";

}

let resultado = calculadora(1 , 2);
console.log(resultado);
