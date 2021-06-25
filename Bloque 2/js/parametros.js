'use strict'

function calculadora(num1,num2){
    console.log("Suma: " + (num1+num2));
    console.log("Resta: " + (num1-num2));
    console.log("Multiplicación: " + (num1*num2));
    console.log("División: " + (num1/num2));
    console.log("********************************");
}

for(var i = 1 ; i <= 10 ; i++){
    console.log(i);
    calculadora(i,8);
}