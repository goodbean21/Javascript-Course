'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var películas = ['Gran pez', 'La vida es bella', 'Forrest Gump'];

var cine = [categorias, películas];
console.log(cine[0][2]);

// Operaciones de arreglos
// películas[] = "Batman"; // Esto sólo funciona en PHP
while(true){
  let elemento = prompt("Nombre de la película: ");
  if (elemento.toUpperCase() == "YA") break;
  películas.push(elemento);

}

var ind = 0;
while(ind >= 0){
  ind = películas.indexOf(prompt("Cuál película quieres borrar: ", películas[0]));
  películas.splice(ind, 1);
}

console.log(películas);
