
function crearPresion(nivelInicial) {
  let nivelActual = nivelInicial;

  return {
    aumentar(q) {
    nivelActual += q;
        if (nivelActual > 100) {
            nivelActual = 100;
        }
    },
    disminuir(q) {
        nivelActual -= q;
        if (nivelActual < 0) {
            nivelActual = 0;
        }
    },

    nivel() {
      return nivelActual;
    },
    estado() {
      switch (true) {
        case (nivelActual < 40):
          return "BAJA";
        case (nivelActual > 70):
          return "ALTA";
        default:
          return "NORMAL";
      }
    },
    reiniciar() {
      nivelActual = nivelInicial;
    }
  };
}


const presion = crearPresion(50);


const bloque = document.getElementById("bloque");
const Aumentar = document.getElementById("Aumentar");
const Disminuir = document.getElementById("Disminuir");
const Reiniciar = document.getElementById("Reiniciar");


bloque.textContent = `${presion.nivel()} (${presion.estado()})`;
bloque.className = "text-2xl font-bold p-4 rounded-lg mb-4 bg-green-200 text-green-800";

Aumentar.onclick = function() {
  presion.aumentar(10);

  const nivel = presion.nivel();
  const estado = presion.estado();
  bloque.textContent = `${nivel} (${estado})`;
  bloque.className = "text-2xl font-bold p-4 rounded-lg mb-4";
  switch (estado) {
    case "NORMAL":
      bloque.classList.add("bg-green-200", "text-green-800");
      break;
    case "BAJA":
      bloque.classList.add("bg-yellow-200", "text-yellow-800");
      break;
    case "ALTA":
      bloque.classList.add("bg-red-200", "text-red-800");
      break;
  }
};

Disminuir.onclick = function() {
  presion.disminuir(10);

  const nivel = presion.nivel();
  const estado = presion.estado();
  bloque.textContent = `${nivel} (${estado})`;
  bloque.className = "text-2xl font-bold p-4 rounded-lg mb-4";
  switch (estado) {
    case "NORMAL":
      bloque.classList.add("bg-green-200", "text-green-800");
      break;
    case "BAJA":
      bloque.classList.add("bg-yellow-200", "text-yellow-800");
      break;
    case "ALTA":
      bloque.classList.add("bg-red-200", "text-red-800");
      break;
  }
};

Reiniciar.onclick = function() {
  presion.reiniciar();

  const nivel = presion.nivel();
  const estado = presion.estado();
  bloque.textContent = `${nivel} (${estado})`;
  bloque.className = "text-2xl font-bold p-4 rounded-lg mb-4";
  switch (estado) {
    case "NORMAL":
      bloque.classList.add("bg-green-200", "text-green-800");
      break;
    case "BAJA":
      bloque.classList.add("bg-yellow-200", "text-yellow-800");
      break;
    case "ALTA":
      bloque.classList.add("bg-red-200", "text-red-800");
      break;
  }
};
