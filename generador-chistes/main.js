

let btnChiste = document.querySelector(".btn-chiste");

let parrafoChiste = document.querySelector(".chiste");

async function mostrarChiste() {

    // Estado inicial del párrafo al hacer click en el botón
    parrafoChiste.textContent = "Cargando...";

    // Se deshabilita el botón para no hacer click varias veces seguidas
    btnChiste.disabled = true;

    try {

        const respuesta = await fetch("https://api.chucknorris.io/jokes/random");

        if(respuesta.ok){

            const data = await respuesta.json();
            parrafoChiste.textContent = data.value;
            btnChiste.textContent = "Ver un nuevo chiste";
            
        } else {
            parrafoChiste.textContent = "Ha ocurrido un error al buscar el chiste. Inténtalo de nuevo";
        }

    } catch (error) {

        parrafoChiste.textContent = "Ha ocurrido un error mostrando el chiste. Inténtalo de nuevo";
        console.log(error);

    } finally {
        // Se activa el botón
        btnChiste.disabled = false;
    }

}

btnChiste.addEventListener("click", mostrarChiste);