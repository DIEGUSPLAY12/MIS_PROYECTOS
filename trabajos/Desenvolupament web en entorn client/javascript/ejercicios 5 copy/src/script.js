// Buscar elementos de la página
        const entrada = document.querySelector('#entrada');
        const lista = document.querySelector('ol');
        const estado = document.querySelector('#estado');
        
        // Cargar lista guardada
        const listaGuardada = sessionStorage.getItem('miLista');
        if (listaGuardada) {
            lista.innerHTML = listaGuardada;
