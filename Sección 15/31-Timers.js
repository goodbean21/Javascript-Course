'use strict'

window.addEventListener('load', () => {

  //Timers
  function interval(){
      let time = setInterval(() => {
        console.log("Set interval running");

        let encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize == "30px") {
          encabezado.style.fontSize = "20px";
        }else {
          encabezado.style.fontSize = "30px";
      }
    }, 1000);

    return time;
  }

  var time = interval();
  
  var time2 = setTimeout(() => {
      document.querySelector("h1").style.fontSize = "50px";
  }, 4000)

  var stopButton = document.querySelector("#stop");
  stopButton.addEventListener("click", () => {
        clearInterval(time);
        alert("Stopped");
  });

  var startButton = document.querySelector("#start");
  startButton.addEventListener("click", () => {
        interval();
        alert("Started");
  });

});
