'use strict'

window.addEventListener('load', function(){

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            //alert("El nombre es inválido");
            var error = document.querySelector(".error_number");
            error.innerHTML = "El nombre es inválido <br/>";
            error.style.color = "red";
            return false;
        }else{
            document.querySelector(".error_number").style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            //alert("Los apellidos son inválidos");
            var error = document.querySelector(".error_number2");
            error.innerHTML ="El apellido es inválido <br/>";
            error.style.color = "red";
            return false;
        }else{
            document.querySelector(".error_number2").style.display = "none";
        }

        if(edad== null || edad <= 0 || isNaN(edad)){
            //alert("La edad es inválida");
            var error = document.querySelector(".error_number3");
            error.innerHTML ="La edad es inválido <br/>";
            error.style.color = "red";
            return false;
        }else{
            document.querySelector(".error_number3").style.display = "none";
        }


        box_dashed.style.display = "block";

        var p_nombre =  document.querySelector("#p_nombre span");
        var p_apellidos =  document.querySelector("#p_apellidos span");
        var p_edad =  document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

/*

        var datos_usuario = [nombre,apellidos,edad];

        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
*/
    });
});