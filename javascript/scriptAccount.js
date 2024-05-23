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


/************************************************************
* formulario                                                *  
************************************************************/

const opcionesPais = document.getElementById("pais");
const campoTexto = document.getElementById("otro-pais");
const texto = document.getElementById("nombrePais");
campoTexto.style.display = 'none';
opcionesPais.addEventListener("change",function(){
    if(opcionesPais.value === "otro"){
        campoTexto.style.display = "block";
    }else{
        campoTexto.style.display = "none";
        texto.value = "";
    }
});

/******validacion contra **********/

const passInput = document.getElementById("passw");
const confirm = document.getElementById("passw-two");

passInput.addEventListener("input",()=>{  
  passInput.value = passInput.value.trim();//elimina espacios en blanco al escribir.
});

confirm.addEventListener("input",()=>{ 

  confirm.value = confirm.value.trim();

  if(passInput.value === confirm.value){
    confirm.setCustomValidity("");//coinciden
  }else{
    confirm.setCustomValidity("Las contraseñas no coinciden");
    
  }
});

/*****************modal***************/
// Obtener los elementos del DOM
const modal1 = document.getElementById('ayuda1');
const modal2 = document.getElementById('privacidad1');
const modal3 = document.getElementById('condiciones1');

const openModal1 = document.getElementById('ayuda2');
const openModal2 = document.getElementById('privacidad2');
const openModal3 = document.getElementById('condiciones2');

const closeModal1 = document.getElementById('ayuda3');
const closeModal2 = document.getElementById('privacidad3');
const closeModal3 = document.getElementById('condiciones3');


// Function para abrir modal.
function openModal(modal) {
  modal.style.display = 'block';
}

// Function para cerrar modal.
function closeModal(modal) {
  modal.style.display = 'none';
}

// Abrir los modals.
openModal1.onclick = () => openModal(modal1);
openModal2.onclick = () => openModal(modal2);
openModal3.onclick = () => openModal(modal3);


// Cerrar los modals al clic en cerrar.
closeModal1.onclick = () => closeModal(modal1);
closeModal2.onclick = () => closeModal(modal2);
closeModal3.onclick = () => closeModal(modal3);


// Cerrar los modals al clic fuera.
window.onclick = (event) => {
  if (event.target === modal1) {
    closeModal(modal1);
  } else if (event.target === modal2) {
    closeModal(modal2);
  }else if (event.target === modal3) {
    closeModal(modal3);
  }
};
