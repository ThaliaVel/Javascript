'use strict'

var peliculas = ['Conjuro','No se aceptan devoluciones','Amarte duele','Batman'];

/*
var elemento = "";

do{
    elemento = prompt("Introduce una película");
    //Agregar elemento al array
    peliculas.push(elemento);
}while(elemento != "ACABAR");

//Elimina el último elemento del array
peliculas.pop();
*/

//Eliminar elementos de un array
var indice =  peliculas.indexOf('Amarte duele');

if(indice > -1){
    peliculas.splice(indice,1);
}
//console.log(peliculas);

//Convertir array a string
var peliculas_string = peliculas.join();
//console.log(peliculas_string);

//Convertir string a array
var cadena = "texto1, texto2, texto3";
var cadena_array= cadena.split(", ");
//console.log(cadena_array);

//Ordenar el array
//peliculas.sort();
peliculas.reverse();
console.log(peliculas);