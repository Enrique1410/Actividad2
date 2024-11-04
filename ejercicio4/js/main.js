// Variable global para rastrear el estado de visibilidad del texto adicional
let isTextVisible = false;

function toggleText() {
    // Obtenemos el elemento de texto adicional y el enlace
    const additionalText = document.querySelector('.additional');
    const toggleLink = document.querySelector('a');

    // Cambiamos el estado según esté visible o no
    if (isTextVisible) {
        additionalText.classList.remove('visible');
        additionalText.classList.add('hidden');
        toggleLink.textContent = 'Seguir leyendo';
    } else {
        additionalText.classList.remove('hidden');
        additionalText.classList.add('visible');
        toggleLink.textContent = 'Ocultar exceso de texto';
    }

    // Cambiamos el valor de la variable global
    isTextVisible = !isTextVisible;
}
