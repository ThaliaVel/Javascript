'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario que nos diga si lo encuentra
*/ 

function mostrarArray(elementos,textoCustom = ""){
    document.write("<h1>Contenido del array "+ textoCustom +"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento,index) => {
        document.write("<li>"+elemento+ "</li>");  
    });
    document.write("</ul>");
}

var numeros = [];

for(var i = 1 ; i <= 6 ; i++){
    //numeros[i] = parseInt(prompt("Introduce el numero "+ i + ": ",0));
    numeros.push(parseInt(prompt("Introduce el numero "+ i + ": ",0)));
}

//Mostrar por pantalla
mostrarArray(numeros);

//Mostrar por consola
console.log(numeros);

//Ordenados
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros,"ordenados");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros,"invertido");

//Elementos del array
document.write("El array tiene: " + numeros.length + " elementos <br/>");

//Busqueda
var busqueda = parseInt(prompt("Busca un numero:",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("Posición de la búsqueda: " + posicion);
}else{
    document.write("No se ha encontrado");
}
