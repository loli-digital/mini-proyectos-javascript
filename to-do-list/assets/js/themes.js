const enableDarkmode = () => {
    document.body.classList.add("dark__theme");
    localStorage.setItem("darkMode", "active");
};

const disableDarkmode = () => {
    document.body.classList.remove("dark__theme");
    localStorage.setItem("darkMode", null);
};

// Recuperamos el estado de localStorage
let darkMode = localStorage.getItem("darkMode");

//Se añade la clase para deshabilitar transiciones al cargar la página
document.body.classList.add("no-transition");

// Las transiciones se activan para interacciones posteriores
setTimeout(() => {
    document.body.classList.remove("no-transition");
}, 0);

// Preferencia de usuario
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem("darkMode") === null) {
    enableDarkmode();
} else if (darkMode === "active") {
    enableDarkmode();
}

/*Acción de cambiar de tema al hacer click en el botón*/
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");
        darkMode !== "active" ? enableDarkmode() : disableDarkmode();
    });
} else {
    console.error("Elemento con ID 'theme-toggle' no encontrado. Asegúrate de que existe en tu HTML.");
}