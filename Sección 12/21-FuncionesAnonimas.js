'use strict'
/*
  Funciones Anónimas: Es una función que no tiene nombre (?)
*/

var pelicula = function(nombre){
  return "La películas es: " + nombre;

}

function sumar(numero1, numero2, sumaYMuestra, sumaPorDos){
    let suma = numero1 + numero2;
    sumaYMuestra(suma);
    sumaPorDos(suma);

    return suma;

  }

sumar(1, 2,
  function(dato){
    console.log("La suma es: " , dato);

  },
  function(dato){
    console.log("La suma por 2: ", (dato * 2));
});


sumar(1, 2,
      (dato) => console.log("La suma es: " , dato),
      (dato) => console.log("La suma por 2: " , dato * 2)
    );
