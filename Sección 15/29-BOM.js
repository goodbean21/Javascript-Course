'use strict'

// BOM - Browser Object Model

function getWindowSize(){
  console.log(window.innerHeight);
  console.log(window.innerWidth);

}

function getScreenSize(){
  console.log(screen.height);
  console.log(screen.width);

}

function getWindowLocation() {
  console.log(window.location.href);

}

function redirect(url){
  window.location.href = url;

}

function openWindow(url){
  window.open(url, "", "width = 400, height = 300");

}
