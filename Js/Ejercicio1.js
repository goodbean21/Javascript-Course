'use strict'

/*
Un programa que pida 2 números. Nos diga el cuál es mayor,
menor o si son iguales*/

var num1 = NaN, num2 = NaN;

while(isNaN(num1) || isNaN(num2)){
	num1 = prompt("El primer numero:", 0);
	num2 = prompt("El segundo numero:", 0);
}

if(num1 > num2){
	console.log(num1 + " is bigger than " + num2);

}else if(num2 > num1){
	console.log(num2 + " is bigger than " + num1);
	
}else{
	console.log("They have the same value");
		
}