'use strict'

function calculadora(num1,num2,mostrar =false){

    if(mostrar==false){
    console.log("Suma: " + (num1+num2));
    console.log("Resta: " + (num1-num2));
    console.log("Multiplicación: " + (num1*num2));
    console.log("División: " + (num1/num2));
    console.log("********************************");
    }else{
    document.write("Suma: " + (num1+num2)+"<br/>");
    document.write("Resta: " + (num1-num2)+"<br/>");
    document.write("Multiplicación: " + (num1*num2)+"<br/>");
    document.write("División: " + (num1/num2)+"<br/>");
    document.write("********************************");
    }
}

//Invocar o llamar la función

calculadora(3,4);
calculadora(5,5,true);