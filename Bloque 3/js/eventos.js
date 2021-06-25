'use strict'

//Eventos del ratón

//load para poner script en el head de elementos que se utilizan del html y no poner el script al final del código
window.addEventListener('load', () =>{
    function cambiarColor(){
        console.log("Me has dado clic");
    
        var bg = boton.style.background;
    
        if(bg == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
    
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
    
        return true;
    }
    
    var boton = document.querySelector("#boton");
    
    //Click
    boton.addEventListener('click', function(){
        cambiarColor();
    });
    
    //Mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc";
    });
    
    //Mouse out
    boton.addEventListener('mouseout', function(){
        boton.style.background = "black";
    });
    
    //Focus - fuera del input
    var input = document.querySelector("#campo_nombre");
    
    input.addEventListener('focus', function(){
        input.style.background = "pink";
    });
    
    //Blur - fuera del input
    input.addEventListener('blur', function(){
        input.style.background = "blue";
    });
    
    //Keydown
    input.addEventListener('keydown', function(){
        input.style.background = "yellow";
        console.log("Pulsando este tecla", String.fromCharCode(event.keyCode));
    });
    
    //Keypress
    input.addEventListener('keypress', function(){
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    });
    
    //Keyup
    input.addEventListener('keyup', function(){
        console.log("Tecla soltada", String.fromCharCode(event.keyCode));
    });
}); //end load