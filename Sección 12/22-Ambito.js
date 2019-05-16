'use strict'

let texto = "Hola mundo soy una variable global";

function helloWorld(texto){
  let hola_mundo = "Soy una variable local";
  console.log(texto);
  console.log(hola_mundo);

}

helloWorld(texto);
