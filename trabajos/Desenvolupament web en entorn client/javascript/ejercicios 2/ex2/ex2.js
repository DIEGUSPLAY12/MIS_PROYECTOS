let traje = false;
let soporte = false;
let arnes = false;

function actualizarPantalla() {
  document.getElementById("estadoTrajeAhora").textContent = traje ? "✅" : "⏳";
  document.getElementById("soporteok").textContent = soporte ? "✅" : "⏳";
  document.getElementById("arneslisto").textContent = arnes ? "✅" : "⏳";

  if (traje && soporte && arnes) {
    document.getElementById("elestado").textContent = "LISTO ✅";
  } else {
    document.getElementById("elestado").textContent = "PENDIENTE";
  }
}

function ponerTrajeAhora() {
  traje = true;
  actualizarPantalla();
}

function revisarSoporte() {
  soporte = true;
  actualizarPantalla();
}

function cerrarArnes() {
  arnes = true;
  actualizarPantalla();
}

function hacerTodoAuto() {
  ponerTrajeAhora();
  revisarSoporte();
  cerrarArnes();
}

function reiniciarPasos() {
  traje = false;
  soporte = false;
  arnes = false;
  actualizarPantalla();
}


document.getElementById("botonTraje").onclick = ponerTrajeAhora;
document.getElementById("botonSoporte").onclick = revisarSoporte;
document.getElementById("botonArnes").onclick = cerrarArnes;
document.getElementById("hacerAuto").onclick = hacerTodoAuto;
document.getElementById("reiniciarTodo").onclick = reiniciarPasos;


actualizarPantalla();
