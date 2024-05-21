/**********button****************/

const identificador = ["#contenido-html","#contenido-css","#contenido-js"];
const videos = [
    {
        src : "https://www.youtube.com/embed/DxumDNXRtpI?si=XQmI-4QTFRybQ-3y",/*aca html */
        titulo : "Curso de HTML5 esencial - Estructura (header y más)"
    },{
        src : "https://www.youtube.com/embed/Arlyf01AJAI?si=4GGoD2OdAT1fEdSq" ,
        titulo : "CURSO de HTML5 desde CERO 2021 - #62 - Etiqueta video"
    },{
        src : "https://www.youtube.com/embed/iEgusLwvTZE?si=THwQJi-WCghPNgNM",
        titulo : "❤ ¿Qué es Etiqueta H1, H2, H3, H4, H5, H6 en HTML? 👉 Curso de HTML5"
    },{
        src : "https://www.youtube.com/embed/EVBlLkfh2V0?si=PIALgp3A8tmVk88T",/*aca empieza css*/
        titulo : "GUÍA COMPLETA DE FLEXBOX ANIMADA | CSS"
    },{
        src : "https://www.youtube.com/embed/El0OJ6h_2ZI?si=bQWV12h9_u5VM_rH",
        titulo: "SÓLO 3 LÍNEAS: CSS Grid responsive sin media queries"
    },{
        src : "https://www.youtube.com/embed/zD3ioUqx9Gk?si=-VCKLWzzJmjVMZqd",
        titulo : "Imagen de fondo en CSS para tu Página Landing 😎"
    },{/**aca js los 3 a cargar */
        src : "https://www.youtube.com/embed/-mNp3-UX9Qc?si=roLda2xC3P7UW6iy",
        titulo : "Accediendo a un documento iframe (contentWindow) - Tutorial de JavaScript"
    },{
        src : "https://www.youtube.com/embed/Yk1KfoAwbug?si=IEYE-AsAqJdTVuit",
        titulo : "5 PRO TIPS para escribir código en JavaScript"
    },{
        src : "https://www.youtube.com/embed/bSHitSCqWr8?si=hY2FhtbKDjggEt9R",
        titulo : "Efecto de Escritura (ANIMADA) con JAVASCRIPT | Fácil"
    }
];

function agregarVideo(inicio, fin, este){
    const contenedorPadre = document.querySelector(este);
    for(let i = inicio; i <= fin ; i++){
        
        //creo nodos.
        const hijo = document.createElement('div');
        const videoHijo = document.createElement('div');
        const tituloHijo = document.createElement('div');
        
        //atributos
        hijo.setAttribute('class', 'a-video2');
        tituloHijo.setAttribute('class', 'details');
        videoHijo.setAttribute('class', 'video-contenedor2');

        videoHijo.innerHTML = '<iframe src="'+videos[i].src+'" title="YouTube video player" frameborder="0" allowfullscreen></iframe>';
        tituloHijo.innerHTML = '<h3>'+videos[i].titulo+'</h3>';
        
        //agrego nodos.
        hijo.appendChild(videoHijo);
        hijo.appendChild(tituloHijo);
        contenedorPadre.appendChild(hijo);
    }
    switch(este){
        case identificador[0]:
            const b1 = document.querySelector('#bhtml');
            const b11 = document.querySelector('#bhtmll');
            b1.setAttribute('class', 'ocultos');
            b11.classList.remove('ocultos');
            break;
        case identificador[1]:
            const b2 = document.querySelector('#bcss');
            const b21 = document.querySelector('#bcsss');
            b2.setAttribute('class', 'ocultos');
            b21.classList.remove('ocultos');
            break;
        case identificador[2]:
            const b3 = document.querySelector('#bjs');
            const b31 = document.querySelector('#bjss');
            b3.setAttribute('class', 'ocultos');
            b31.classList.remove('ocultos');
            break;
        default: 
            break;
    }
}
//Implementada la api de youtube en pages.

/*******************publicidad**************************/

function clickPublicidad(){
    const publicidad1 = document.querySelector('.publicidad-registrarse');
    publicidad1.setAttribute('class', 'ocultos');
}
