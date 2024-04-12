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
//mientras veo como utilizar la api de youtube.
