/*
Ejercicio 31:

Crea un semáforo con tres luces (rojo, amarillo y verde)
Haz los círculos del semáforo con HTML y CSS

Cuando un peatón quiere cruzar la calle debe pulsar un botón.
Crea un botón para cambiar el color de las luces del semáforo
secuencialmente (de rojo a verde, pasando por el amarillo).

Importante:
El semáforo siempre empieza en rojo.
Cuando haces click en el botón, pasará a amarillo.
Al hacer click otra vez, pasa a verde y así, sucesivamente.

*/
let boton = document.querySelector(".btn");
let luces = document.querySelectorAll(".luz");
let i = 0;

boton.addEventListener("click", () => {

    //Retirar las luces activas
    luces.forEach(luz => luz.classList.remove("activo"));

    //Encender luz
    luces[i].classList.add("activo");

    //Cambiar el índice para la siguente luz
    i++;

    //Para que comience la luz desde el principio
    if(i > 2){
        i = 0;
    }

});