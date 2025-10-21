
const tripulacion = [];


document.getElementById("btnAgregar").onclick = function() {
  const nombre = document.getElementById("nombre").value.trim();
  const rol = document.getElementById("rol").value.trim();
  const experiencia = Number(document.getElementById("experiencia").value);

  if (!nombre || !rol || isNaN(experiencia) || experiencia <= 0) {
    document.getElementById("mensaje").textContent = "⚠️ Completa todos los campos correctamente.";
    return;
  }

  const nuevoAstronauta = { nombre, rol, experiencia };
  tripulacion.push(nuevoAstronauta);

  document.getElementById("mensaje").textContent = `✅ Astronauta ${nombre} agregado correctamente.`;


  document.getElementById("nombre").value = "";
  document.getElementById("rol").value = "";
  document.getElementById("experiencia").value = "";
};


function capitalizarNombres(array) {
  return array.map(a => ({
    ...a,
    nombre: a.nombre.toUpperCase()
  }));
}


function mostrarTripulacion() {
  const salida = document.getElementById("salida");

  if (tripulacion.length === 0) {
    salida.textContent = "🚫 No hay astronautas registrados.";
    return;
  }

  const tripCap = capitalizarNombres(tripulacion);
  let texto = "👩‍🚀 Tripulación actual:\n";

  tripCap.forEach(({ nombre, rol, experiencia }) => {
    texto += `- ${nombre} | Rol: ${rol} | Experiencia: ${experiencia} años\n`;
  });

  salida.textContent = texto;
}


function filtrarPorRol() {
  const salida = document.getElementById("salida");
  const rolBuscado = document.getElementById("rolFiltro").value.trim().toLowerCase();

  if (rolBuscado === "") {
    salida.textContent = "⚠️ Escribe un rol para filtrar (por ejemplo: piloto, ingeniero...).";
    return;
  }

  const filtrados = tripulacion.filter(a => a.rol.toLowerCase().includes(rolBuscado));

  if (filtrados.length === 0) {
    salida.textContent = `🚫 No se encontraron astronautas con el rol "${rolBuscado}".`;
    return;
  }

  let texto = `🚀 Astronautas con rol que incluye "${rolBuscado}":\n`;
  filtrados.forEach(({ nombre, rol, experiencia }) => {
    texto += `- ${nombre} | Rol: ${rol} | Experiencia: ${experiencia} años\n`;
  });

  salida.textContent = texto;
}


function calcularExperienciaMedia() {
  const salida = document.getElementById("salida");

  if (tripulacion.length === 0) {
    salida.textContent = "🚫 No hay astronautas para calcular la experiencia media.";
    return;
  }

  const total = tripulacion.reduce((sum, a) => sum + a.experiencia, 0);
  const media = (total / tripulacion.length).toFixed(2);
  salida.textContent = `📊 Experiencia media: ${media} años.`;
}


document.getElementById("btnListar").onclick = mostrarTripulacion;
document.getElementById("btnFiltrar").onclick = filtrarPorRol;
document.getElementById("btnMedia").onclick = calcularExperienciaMedia;
