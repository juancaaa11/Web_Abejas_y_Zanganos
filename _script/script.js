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

 // Ejecutar cuando se haga scroll
 window.addEventListener('scroll', verificarVisibilidad);

 // Ejecutar una vez al cargar la pagina
 verificarVisibilidad();