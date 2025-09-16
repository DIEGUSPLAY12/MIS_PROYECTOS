let contadoroxigeno = 50; 

const nivelox = document.getElementById("contadoroxigeno");
const btnSumar = document.getElementById("sumar5");
const btnRestar = document.getElementById("restar5");
const elMensaje = document.getElementById("mensaje");


nivelox.textContent = contadoroxigeno + "%";

sumar5.onclick = function() {
    if (contadoroxigeno < 100) {   
        contadoroxigeno += 5;
        if (contadoroxigeno > 100) contadoroxigeno = 100;
    }

    nivelox.textContent = contadoroxigeno + "%";

    if (contadoroxigeno === 100) {
        elMensaje.textContent = "Oxígeno al máximo.";
    } else if (contadoroxigeno <= 25) {
        elMensaje.textContent = "Cuidado, te queda poco oxígeno.";
    } else {
        elMensaje.textContent = "Has sumado 5% de oxígeno.";
    }
}


restar5.onclick = function() {
     if (contadoroxigeno > 0) {
        contadoroxigeno -= 5;
        if (contadoroxigeno < 0) contadoroxigeno = 0;
    }

    nivelox.textContent = contadoroxigeno + "%";

    if (contadoroxigeno === 0) {
        elMensaje.textContent = "Sin oxígeno. ¡Alerta!";
    } else if (contadoroxigeno <= 25) {
        elMensaje.textContent = "Cuidado, te queda poco oxígeno.";
    } else if (contadoroxigeno === 100) {
        elMensaje.textContent = "Oxígeno al máximo.";
    } else {
        elMensaje.textContent = "Has restado 5% de oxígeno.";
    }
}