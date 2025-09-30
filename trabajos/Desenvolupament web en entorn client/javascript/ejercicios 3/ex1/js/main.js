import { CargoBay } from "./CargoBay.js";
import { Container } from "./Container.js";

const out = document.getElementById("out");

const formulario = document.getElementById("formulario"); // coincide con HTML
const text = document.getElementById("text");
const Massa = document.getElementById("Massa");
const resetear = document.getElementById("resetear");

let bay = new CargoBay(); // mejor nombre que "container"

function renderBay() {
  out.textContent = "";
  const lines = bay.toLines();
  for (let i = 0; i < lines.length; i++) {
    out.textContent += lines[i] + "\n";
  }
}

formulario.onsubmit = function (ev) {
  ev.preventDefault();
  try {
    const label = text.value.trim();
    const mass = Number(Massa.value);


    bay.add(new Container(label, mass));
    renderBay();

    formulario.reset();
  } catch (e) {
    out.textContent += "⚠️ " + e.message + "\n";
  }
};

resetear.onclick = function () {
  bay = new CargoBay();
  out.textContent = "\n";
};
