// Buscar elementos de la página
        const entrada = document.querySelector('#entrada');
        const lista = document.querySelector('ol');
        const estado = document.querySelector('#estado');
        
        // Cargar lista guardada
        const listaGuardada = sessionStorage.getItem('miLista');
        if (listaGuardada) {
            lista.innerHTML = listaGuardada;
        }
        
        // Verificar si el texto cumple las reglas
        function textoValido(texto) {
            // Primero mayúscula, luego minúsculas o números
            const regla = /^[A-Z][a-z0-9]*$/;
            return regla.test(texto);
        }
        
        // Cambiar colores según si está bien o mal
        function cambiarColores(estaBien) {
            if (estaBien) {
                entrada.style.border = "2px solid green";
                entrada.style.background = "#e8f5e8";
                estado.innerHTML = "✅";
                estado.setAttribute('aria-label', 'Texto válido');
            } else {
                entrada.style.border = "2px solid red";
                entrada.style.background = "#ffe6e6";
                estado.innerHTML = "❌";
                estado.setAttribute('aria-label', 'Texto inválido');
            }
        }
        
        // Agregar nuevo elemento a la lista
        function agregarItem(texto) {
            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = texto;
            lista.appendChild(nuevoItem);
            
            // Guardar en memoria
            sessionStorage.setItem('miLista', lista.innerHTML);
            
            // Limpiar para escribir de nuevo
            entrada.value = '';
            estado.innerHTML = '';
            entrada.style.border = "";
            entrada.style.background = "";
            estado.removeAttribute('aria-label');
        }
        
        // Verificar mientras escribo
        entrada.addEventListener('input', function() {
            const estaBien = textoValido(this.value);
            cambiarColores(estaBien);
        });
        
        // Agregar con tecla Enter
        entrada.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const texto = this.value.trim();
                
                if (textoValido(texto)) {
                    agregarItem(texto);
                }
            }
        });