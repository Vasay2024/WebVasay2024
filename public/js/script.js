/* Este script abre la imagen de la miniatura en una nueva pestaña al hacer clic en ella

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las miniaturas de la galería
    const thumbnails = document.querySelectorAll('.art-thumbnail');

    // Asigna un escuchador de eventos a cada miniatura
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del navegador
            event.preventDefault();
            // Obtiene la URL de la imagen de la miniatura
            const imageUrl = thumbnail.getAttribute('src');
            // Abre la imagen en una nueva pestaña del navegador
            window.open(imageUrl, '_blank');
        });
    });
});*/
