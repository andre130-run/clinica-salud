function mostrarMensaje() {
  alert("Bienvenido a Clínica Vida Saludable. ¡Cuidar tu salud es nuestra misión!");
}
document.getElementById("formCita").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recargar la página

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const fecha = document.getElementById("fecha").value;

  alert(`Gracias, ${nombre}! Tu solicitud de cita para el ${fecha} ha sido enviada. Te contactaremos a ${correo}.`);

  // Limpia el formulario
  this.reset();
});
