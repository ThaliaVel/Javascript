'use strict'

//Timers
window.addEventListener('load', () => {

    function intervalo(){  
    //Se ejecuta infitamente
    var tiempo = setInterval(function(){

        //Se ejecuta una vez
        //var tiempo = setTimeout(function(){
        
            console.log("Set interval ejecutado");
    
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        },500);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("has detenido el intervalo bucle");
        clearInterval(tiempo);
    })
    var start = document.querySelector("#start");

    start.addEventListener("click", function(){
        alert("has iniciado el intervalo bucle");
        intervalo();
    })

});