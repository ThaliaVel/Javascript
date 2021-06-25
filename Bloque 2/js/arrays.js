'use strict'

//Arrays

var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", 44, true];

var lenguajes =  new Array("PHP", "JS", "Java","C#");

/*
var elemento = parseInt(prompt("Que elemento del array quieres?"));

if(elemento >= nombres.length){
    alert("Introduce un numero menor que: " + nombres.length);
}else{
    alert("El nombre seleccionado es: " + nombres[elemento]);
}
*/

document.write("<h1> Lenguajes de programación </h1>");
document.write("<ul>");
/*
for(var i=0 ; i < lenguajes.length ; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}


//Otra opción de hacer lo mismo
lenguajes.forEach((elemento, indice) => {
    document.write("<li>"+ indice + "-"+ elemento +"</li>")
});
*/

//Otra opción
for(let lenguaje in lenguajes){
    document.write("<li>"+ lenguajes[lenguaje]+"</li>")
}
document.write("</ul>");


//BÚSQUEDAS
/*
//Buscar texto en un array
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

//Buscar indice de un elemento
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
*/

var precios = [10,20,50,80,12];
var busqueda = precios.some(precio => precio <=10);

console.log(busqueda);

