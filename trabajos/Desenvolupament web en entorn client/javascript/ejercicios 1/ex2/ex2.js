const inputs = document.getElementById('imputs');
const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');

boton.onclick = function() {
    if (inputs.value === "") {
        mensaje.textContent = 'No has introducido ningún valor';
    } else {
        mensaje.textContent = 'Has sido correcatmente registrado';
    }

}
