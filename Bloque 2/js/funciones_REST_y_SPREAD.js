'use strict'

//parametros REST y SPREAD

//Ejemplo REST
function listadoFrutas(fruta1,fruta2, fruta3, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log("Fruta 3: ", fruta3);
    console.log(resto_de_frutas);
}

console.log("REST");
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//Ejemplo SPREAD
console.log("SPREAD");
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");