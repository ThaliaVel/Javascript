'use strict'

function porConsola(num1,num2){
    console.log("Suma: " + (num1+num2));
    console.log("Resta: " + (num1-num2));
    console.log("Multiplicación: " + (num1*num2));
    console.log("División: " + (num1/num2));
    console.log("********************************");
}

function porPantalla(num1,num2){
    document.write("Suma: " + (num1+num2)+"<br/>");
    document.write("Resta: " + (num1-num2)+"<br/>");
    document.write("Multiplicación: " + (num1*num2)+"<br/>");
    document.write("División: " + (num1/num2)+"<br/>");
    document.write("********************************"+"<br/>");
}

function calculadora(num1,num2,mostrar =false){
    if(mostrar==false){
        porConsola(num1,num2);
    }else{
        porPantalla(num1,num2);
    }
}

//Invocar o llamar la función
calculadora(3,4);
calculadora(5,5,true);
calculadora(4,4);
calculadora(4,4,true);