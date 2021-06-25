'use strict'

//Transformación de textos
var numero = 44;
var texto1 = "Bienvenido al curso";
var texto2 = "es muy buen curso";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

//console.log(dato);

//Calcular longitud
var nombre = "Victor Robles";
var frutas = ["Manzana","Fresa"];

//console.log(frutas.length);

//Concatenar - Unir textos
//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" "+ texto2);

console.log(textoTotal);