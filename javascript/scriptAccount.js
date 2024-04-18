/**********Crear cuenta****************/
// Creacion de constantes con querySelector.
const btn = document.querySelector(".btn-registrarse");
const btn2 = document.querySelector(".btn-cancelar-formulario");

const sesionInicio = document.querySelector(".cuenta");
const sesionCrear = document.querySelector(".caja_formulario");
const titulo = document.querySelector(".titulo-h2");

// Agregando evento de escucha al crear cuenta.
btn.addEventListener("click", function() {
    sesionInicio.classList.add("oculto");
    sesionCrear.classList.remove("oculto");

    titulo.innerHTML = 'Crear cuenta';
});

// Agregando evento de escucha al cancelar(agregare mas adelante mas funciones).
btn2.addEventListener("click", function() {
    sesionInicio.classList.remove("oculto");
    sesionCrear.classList.add("oculto");

    titulo.innerHTML = 'Iniciar sesion';
});