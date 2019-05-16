'use strict'

var frutas = ["Naranja", "Manzana"];

//Parametros de tipo REST
function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
  console.log("Fruta #1: " + fruta1, "Fruta #2: ", fruta2);
  console.log(restoDeFrutas);

}

//Parametros de tipo SPREAD
listadoFrutas(...frutas, "Melón", "Sandía");
