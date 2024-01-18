function mostrarToast(mensaje, tipo) {
  Toastify({
    text: mensaje,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: tipo === 'success' ? '#27ae60' : '#e74c3c',
    stopOnFocus: true
  }).showToast();
}

function convertirFecha(fecha) {
    let fechaOriginal = new Date(fecha);
  // Obtener los componentes de la fecha
  let dia = fechaOriginal.getDate();
  let mes = fechaOriginal.getMonth() + 1; // Los meses van de 0 a 11
  let anio = fechaOriginal.getFullYear();
  let horas = fechaOriginal.getHours();
  let minutos = fechaOriginal.getMinutes();

  // Asegurarse de que los componentes tengan dos dígitos
  if (dia < 10) {
    dia = '0' + dia;
  }
  if (mes < 10) {
    mes = '0' + mes;
  }
  if (horas < 10) {
    horas = '0' + horas;
  }
  if (minutos < 10) {
    minutos = '0' + minutos;
  }

  // Construir la cadena en el formato deseado
  let fechaFormateada = dia + '-' + mes + '-' + anio + ' ' + horas + ':' + minutos;

  return fechaFormateada;
}

