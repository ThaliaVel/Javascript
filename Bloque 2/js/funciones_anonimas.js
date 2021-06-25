'use strict'

//Funcion anonima
//Es una función que no tiene nombre

//Ejemplo 
/*
var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}
*/

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}

sumame(5,3, function(dato){
    console.log("La suma es: " + dato);
},
function(dato){
    console.log("La suma por 2 es: " + (dato*2));
});


//FUNCIONES FLECHA
/*
function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}

sumame(5,3, dato => {
    console.log("La suma es: " + dato);
},
dato => {
    console.log("La suma por 2 es: " + (dato*2));
});
*/