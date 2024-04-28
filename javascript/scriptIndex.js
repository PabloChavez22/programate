/**********button****************/

function alDarClick (){
    
    const elementPadre = document.getElementById('contenido-html');
    const bottonPadre = document.getElementById('botton-padre');

    //creo nodos.
    const etA = document.createElement('a');
    const etB = document.createElement('a');
    const etC = document.createElement('a');

    etA.innerHTML = '<div class="video-contenedor"><div class="cuadro-video"><iframe width="400" height="225" src="https://www.youtube.com/embed/kUMe1FH4CHE?si=BhPNqLgqLnCeMSbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="details"><h3>Learn HTML – Full Tutorial for Beginners (2022)</h3></div></div>';
    etB.innerHTML = '<div class="video-contenedor"><div class="cuadro-video"><iframe width="400" height="225" src="https://www.youtube.com/embed/FQdaUv95mR8?si=HycrJFVti7zghje8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="details"><h3>HTML Tutorial for Beginners</h3></div></div>';
    etC.innerHTML = '<div class="video-contenedor"><div class="cuadro-video"><iframe width="400" height="225" src="https://www.youtube.com/embed/mU6anWqZJcc?si=aXt0qOI5gB1a0cVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="details"><h3>Learn HTML5 and CSS3 From Scratch - Full Course</h3></div></div>';
    
    //agrego nodos.
    elementPadre.appendChild(etA);
    elementPadre.append(etB,etC);

    //atributos
    etA.setAttribute('class', 'a-video');
    etB.setAttribute('class', 'a-video');
    etC.setAttribute('class', 'a-video');

    bottonPadre.classList.add("ocultos");
    bottonPadre.classList.remove("caja-button-centrado");
}

const btnC = document.querySelector("#button-js");
const elementPadre3 = document.querySelector("#contenido-jscript");
const bottonPadre3 = document.querySelector("#botton-padre1");
//creo nodos.
const etU = document.createElement('a');
const etV = document.createElement('a');
const etW = document.createElement('a');


btnC.addEventListener('click',function(){
    etU.innerHTML = '<div class="video-contenedor"><div class="cuadro-video"><iframe width="400" height="225" src="https://www.youtube.com/embed/2SetvwBV-SU?si=McXco9G64tSCEZWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="details"><h3>Curso JavaScript: 1. Introducción - #jonmircha</h3></div></div>';
    etV.innerHTML = '<div class="video-contenedor"><div class="cuadro-video"><iframe width="400" height="225" src="https://www.youtube.com/embed/quJzdnXuNDc?si=U79ftuVaU_K8Epbh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="details"><h3>How to Learn Javascript in 2023 (From ZERO)</h3></div></div>';
    etW.innerHTML = '<div class="video-contenedor"><div class="cuadro-video"><iframe width="400" height="225" src="https://www.youtube.com/embed/c-I5S_zTwAc?si=9ITFIcfm1RM4WPZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="details"><h3>Learn JAVASCRIPT in just 5 MINUTES (2020)</h3></div></div>';
    //agrego nodos.
    elementPadre3.append(etU,etV,etW);
    //atributos
    etU.setAttribute('class', 'a-video');
    etV.setAttribute('class', 'a-video');
    etW.setAttribute('class', 'a-video');

    bottonPadre3.classList.add("ocultos");
    bottonPadre3.classList.remove("caja-button-centrado");
});
//mientras veo como utilizar la api de youtube.

/*******************publicidad**************************/
setTimeout(function () {
    const publicidad = document.querySelector('#publicidad-page');
    publicidad.classList.add("ocultos");
},9000);
