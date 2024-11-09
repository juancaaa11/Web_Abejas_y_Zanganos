 // Seleccionar todas las secciones con la clase .pagina
 const secciones = document.querySelectorAll('.pagina');

 // Funcion para verificar si una seccion esta vista
 function verificarVisibilidad() {
     secciones.forEach(seccion => {
         const rect = seccion.getBoundingClientRect();
         if (rect.top < window.innerHeight && rect.bottom >= 0) {
             seccion.classList.add('visible'); // Añadir clase visible si esta en vista
         } else {
             seccion.classList.remove('visible'); // Quitar clase si no esta en vista
         }
     });
 }

 function irASeccion5() {
    document.getElementById("seccion4").scrollIntoView({ behavior: 'smooth' });
  }

 // Ejecutar cuando se haga scroll
 window.addEventListener('scroll', verificarVisibilidad);

 window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

 // Ejecutar una vez al cargar la pagina
 verificarVisibilidad();