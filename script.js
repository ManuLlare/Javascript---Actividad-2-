function comentarioConsola() {
    console.log('Este es un comentario por consola');
  }
  
  function mensajeAlerta() {
    alert('Bienvenido a la pagina numero uno de hate a Ivan Massimino');
  }
  
  function modificarTexto() {
    var elemento = document.getElementById('textoModificar');
    elemento.innerHTML = 'Texto modificado';
  }
  
  function modificarEstilo() {
    var elemento = document.getElementById('estiloModificar');
    elemento.style.backgroundColor = '#f2f2f2';
    elemento.style.padding = '20px';
  }
  
  function agregarComentario() {
    var comentario = document.getElementById('comentario').value;
    var listaComentarios = document.getElementById('listaComentarios');
    var nuevoComentario = document.createElement('p');
    nuevoComentario.textContent = comentario;
    listaComentarios.appendChild(nuevoComentario);
  
    var botonComentario = document.getElementById('botonComentario');
    botonComentario.style.backgroundColor = 'green';
    botonComentario.innerHTML = 'Comentario agregado';
  
    setTimeout(function() {
      botonComentario.style.backgroundColor = '';
      botonComentario.innerHTML = 'Agregar comentario';
    }, 2000);
  
    document.getElementById('comentario').value = '';
  }
