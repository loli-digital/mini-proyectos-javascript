
//Variable para almacenar el número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let contador = 0;
const intentosMaximos = 10;

const input = document.querySelector(".input-number");
const btn = document.querySelector(".comprobar-resultado");
const reiniciarJuego = document.querySelector(".reiniciar-juego");
const mensaje = document.querySelector(".mensaje");
const intentos = document.querySelector(".intentos");
const historial = document.querySelector(".historial");

//Mostrar intentos al inicio del juego
intentos.textContent = `${contador} / ${intentosMaximos}`;

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const number = parseInt(input.value);

    if(isNaN(number) || number < 1 || number > 100){
        mensaje.textContent = "Introduce un número del 1 al 100";
        return;
    }

    contador++;
    intentos.textContent = `${contador} / ${intentosMaximos}`;

    //Guardar intentos en el historial
    const li = document.createElement("li");
    li.textContent = `Intento ${contador}: ${number}`;
    historial.appendChild(li);

    if (number < numeroSecreto) {
        mensaje.textContent = "Demasiado bajo";
    } else if (number > numeroSecreto) {
        mensaje.textContent = "Demasiado alto";
    } else {
        mensaje.textContent = `Has acertado!! El número es: ${numeroSecreto}`;
        btn.disabled = true;
        return;
    }

    if(contador === intentosMaximos){
        mensaje.textContent = `Lo siento, has alcanzado el máximos e intentos! El número secreto era: ${numeroSecreto}`;
        btn.disabled = true;
    }
});

reiniciarJuego.addEventListener("click", () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    contador = 0;
    intentos.textContent = `${contador}/${intentosMaximos}`;
    mensaje.textContent = "";
    historial.innerHTML = "";
    btn.disabled = false;
    input.value = "";
    console.log("Número nuevo:", numeroSecreto); // solo para pruebas
});