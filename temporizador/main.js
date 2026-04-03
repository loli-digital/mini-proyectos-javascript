//Ejercicio con setTimeout

const btnMensaje = document.querySelector(".btn-mensaje");
const btnCancelar = document.querySelector(".btn-cancelar");
const mensaje = document.querySelector(".mensaje");
let temporizador;

btnMensaje.addEventListener("click", () => {

    temporizador = setTimeout(() => {
                    mensaje.textContent = "Hola! Este mensaje ha aparecido 3 segundos después de hacer click en el botón. Ya sabes cómo usar setTimeout()";
                }, 3000);

});

btnCancelar.addEventListener("click", () => {
    clearTimeout(temporizador);
    mensaje.textContent = "Has cancelado la acción";
});


//Ejercicio con setInterval

const btnContador = document.querySelector(".btn-contador");
const btnReiniciar = document.querySelector(".btn-reiniciar");
const resultadoContador = document.querySelector(".resultado-contador");
let contador = 0;
let temporizadorContador;

btnContador.addEventListener("click", () => {
    temporizadorContador = setInterval(() => {
                                contador++;
                                resultadoContador.textContent = contador;

                                if(contador === 10){
                                    clearInterval(temporizadorContador);
                                }

                            }, 1000);
});

btnReiniciar.addEventListener("click", () => {
    clearInterval(temporizadorContador);
    contador = 0; 
    resultadoContador.textContent = contador;
});