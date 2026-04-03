/*
Ejercicio 32:

Crea una lista de la compra en la que el usuario pueda añadir
nuevos productos para comprar con un campo de texto y un botón.

Cada vez que se añade un producto, este aparece
en la lista con un botón para eliminarlo.
*/

let producto = document.querySelector("#producto");
let boton = document.querySelector(".button");
let listaCompra = document.querySelector(".listaCompra");

boton.addEventListener("click", () => {
    let productoParaAgregar = producto.value.trim();

    if(productoParaAgregar){
        //Para crear un elemento <li></li<
        const productoFinal = document.createElement("li");
        productoFinal.textContent = productoParaAgregar;

        //Crear el botón de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.addEventListener("click", () => {
            productoFinal.remove();
        });
        productoFinal.appendChild(botonEliminar);
        productoFinal.classList.add("productoFinal");

        //añade el elemento li a la lista <ul></ul>
        listaCompra.appendChild(productoFinal);
        producto.value = "";

    }
});