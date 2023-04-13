var html = '';

var Publicar = document.getElementById("publicar");

var modal = document.getElementById("myModal");

function mostrarcoment() {
    document.getElementById('myModal').style.display = 'block';
    }

function cerrar() {
        document.getElementById('myModal').style.display = 'none';
        }


   function publicarcomentario() {
        let contenedorLista = document.getElementById("lista");
        //obtener el mensaje
        if(document.getElementById("text2").value === ''){alert('ingrese un comentario')} else{
        var textoPublicacion = document.getElementById("text2");
        html += '<div class="seccion-cerrar">';
        html += '<img src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-n-de-perfil-de-instagram.png" width="50">';
        html += '<span>Andrea Andrade</span></div>';
        html += '<div class="texto">';
        html += '<p>'+textoPublicacion.value+'</p></div>';
    
        //contenedorLista.append(html);
        contenedorLista.innerHTML = html;
        textoPublicacion.value = "";
        //cerrar el modal
        modal.style.display = "none";
        alert('publicación registrada.');}
    }
    




