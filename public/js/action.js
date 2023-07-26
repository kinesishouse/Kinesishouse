
  const botonActivo = document.querySelector('.boton-activo');
  const botonesFlotantes = document.querySelector('.boton-flotantes');

  botonActivo.addEventListener('click', (event) => {
      // Detener la propagación del evento click para que no afecte al documento
      event.stopPropagation();
      event.preventDefault();

      botonesFlotantes.classList.toggle('abrir');
  });

  document.addEventListener('click', (event) => {
      const toggleTarget = document.getElementById(botonActivo.getAttribute('data-toggle'));

      if (!botonActivo.contains(event.target) && !toggleTarget.contains(event.target)) {
          botonesFlotantes.classList.remove('abrir');
      }
  });
