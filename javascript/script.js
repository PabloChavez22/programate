/**********menu****************/
//document.getElementById("next").onclick = 
function menu_function(){
    
    const verifico = document.getElementById("menu_header");
    const main = document.getElementById("miMain");
    const sesion = document.getElementById("nav-sesion");
    const programadores = document.getElementById("nav-programadores");
    const footer = document.getElementById("miFooter");
    const todos = document.querySelectorAll(".menu_option");

    if(verifico.matches(".close")){

        verifico.classList.remove("close");
        main.classList.remove("close");
        sesion.classList.remove("close");
        programadores.classList.remove("close");
        footer.classList.remove("close");

        todos.forEach((elemento)=>{
            elemento.classList.remove("close");
        });
    }
    else{

        verifico.classList.add("close");
        main.classList.add("close");
        sesion.classList.add("close");
        programadores.classList.add("close");
        footer.classList.add("close");

        todos.forEach((elemento)=>{
            elemento.classList.add("close");
        });
    }
}