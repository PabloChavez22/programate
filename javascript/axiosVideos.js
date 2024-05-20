
var y= 0,j=0,k=0;
const r1 = 'html';
const r2 = 'css';
const r3 = 'javascript';
const boton1 = document.getElementById("btnHtml");
boton1.addEventListener("click",function(){
  videosBuscar();
});

async function obtenerVideos(casoq) {
    const tipo = "html";//casoq
    const cantidadVideos = 3;

    try {
        // Realiza la búsqueda de videos en YouTube utilizando Axios
        const apiKey = 'AIzaSyAnhgNL3-Jj1mksQcI-ifnTGNLERZNTmSk';
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${tipo}&maxResults=${cantidadVideos}&key=${apiKey}`;
        const response = await axios.get(url);
        const videos = response.data.items;

        // Muestra los videos y títulos en los divs correspondientes
        videos.forEach((video, index) => {          
          const divHijo = document.createElement('div');
          const titulo = document.createElement('div');
          const videoDiv = document.createElement('div');
          const padre = document.querySelector('.cuadro-contenedor');

          divHijo.setAttribute('class', 'a-video2');
          titulo.setAttribute('class', 'details');
          videoDiv.setAttribute('class', 'video-contenedor2');
          videoDiv.innerHTML = `<iframe src="https://www.youtube.com/embed/${video.id.videoId}" allowfullscreen></iframe>`;
          titulo.innerHTML = `<h3>${video.snippet.title}</h3>`;

          divHijo.appendChild(videoDiv);
          divHijo.appendChild(titulo);
          padre.appendChild(divHijo);
        });
    }catch (error) {
        console.error('Error a depuracion:', error.stack);
    }
}

function alclick(){
  const container = document.getElementById('videoContainer');

  const blocke = document.createElement('a');
  blocke.setAttribute('href','https://www.google.com/');
  blocke.setAttribute('class','fin-videos');
  blocke.innerHTML = '<div class="fin-contenedor2" style="border: solid;display: flex;align-items: center;flex-direction: column;justify-content: center;"><h3>Lo sentimos, limite excedido.</h3><p>Para mas informacion comunicarse con el programador.</p></div><div class="details"><h3>Fin videos demostracion</h3></div>'
  
  container.appendChild(blocke);
}

function count( al ) {
  if( al > 2 ){
    alclick();
    const botonero = document.querySelector('.caja-button-centrado');
    botonero.classList.add("ocultos");
    console.log("pasa por aca");
    return true;
  }
    return false;
}

function videosBuscar() {
  y++;
  console.log(y);
  if (count(y)) {
    console.log("fue al if");
    return;
  }else{
    obtenerVideos(r1);
    console.log("paso else");
  }
  
}
