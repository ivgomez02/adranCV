
window.onload = function() {
    const estilos = document.querySelector('link[rel="stylesheet"]');

    function cambiarModo() {
        if (estilos && estilos.getAttribute('href').includes('Estilos.css')) {
            estilos.setAttribute('href', 'css/EstilosModoOscuro.css');
        } else if (estilos && estilos.getAttribute('href').includes('EstilosModoOscuro.css')) {
            estilos.setAttribute('href', 'css/Estilos.css');
        }

        console.log('Cambio de modo activado');
    }

    document.querySelector('button').addEventListener('click', cambiarModo);
};

