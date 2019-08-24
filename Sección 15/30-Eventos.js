'use strict'

// Event load

window.addEventListener('load', () => {
    // Eventos del cursor
    var boton = document.querySelector("#boton");

    function changeColor(){
      let bg = boton.style.background;

      if(bg == "green")   boton.style.background = "red";
      else                boton.style.background = "green";

      return;

    }

    // Click
    boton.addEventListener('click',function(){
                          changeColor();
                          });

    var encabezado = document.querySelector("#encabezado");

    encabezado.addEventListener('mouseover', function(){
                                encabezado.style.background = "#ccc";
                              });


    encabezado.addEventListener('mouseout', function(){
                                encabezado.style.background = "#FFF";
                              });

    // Eventos de teclado

    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
                              console.log("Focus on input");
                          });

    // Blur
    input.addEventListener('blur', function(){
                              console.log("Out of input");
                          });

    // Keydown
    input.addEventListener('keydown', function(event){
                              console.log("Down key " , String.fromCharCode(event.keyCode));
                          });
    // Keypress
    input.addEventListener('keypress', function(event){
                              console.log("Press key ", String.fromCharCode(event.keyCode));
                          });

    // Keyup
    input.addEventListener('keyup', function(event){
                              console.log("Up key " , String.fromCharCode(event.keyCode));
                          });

});
// End load
