
const inputSearch = document.querySelector(".input__search");
const btnSearch = document.querySelector(".btn__search");
const mensaje = document.querySelector(".mensaje");

const cardUser = document.querySelector(".layout__card");
const nombre = document.querySelector(".card__nombre");
const email = document.querySelector(".card__email");
const ciudad = document.querySelector(".card__ciudad");
const telefono = document.querySelector(".card__telefono");

async function buscadorUsers() {

    const inputLimpio = inputSearch.value.trim().toLowerCase();

    if (inputLimpio === "") {
        mensaje.textContent = "Escribe un nombre para buscar";
        return;
    }

    mensaje.textContent = "Cargando...";

    btnSearch.disabled = true;

    cardUser.style.display = "none";

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {

            throw new Error("Error en la petición");

        }

        const data = await response.json();

        // Filtrar usuarios cuyo nombre incluya el texto del input
        const resultados = data.filter(user =>
            user.name.toLowerCase().includes(inputLimpio)
        );

        if (resultados.length === 0) {
            mensaje.textContent = "No se ha encontrado ningún usuario con ese nombre.";
            cardUser.style.display = "none";
            return;
        }

        // Mostrar el primer usuario encontrado
        const user = resultados[0];

        nombre.textContent = user.name;
        email.textContent = user.email;
        ciudad.textContent = user.address.city;
        telefono.textContent = user.phone;

        mensaje.textContent = "";
        cardUser.style.display = "flex";

    } catch (error) {

        mensaje.textContent = "Ha ocurrido un error. Inténtalo de nuevo";
        cardUser.style.display = "none";
        console.log(error);

    } finally {

        btnSearch.disabled = false;
    }

}

btnSearch.addEventListener("click", buscadorUsers);