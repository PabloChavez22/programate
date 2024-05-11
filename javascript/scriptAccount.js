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
