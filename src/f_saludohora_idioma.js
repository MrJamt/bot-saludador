function f_saludohora(idioma) {
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludo;
  if(idioma.value == "ES")
  {
    if (horaActual >= 6 && horaActual < 12) {
      saludo = "Buenos días ";
    } else if (horaActual >= 12 && horaActual < 19) {
      saludo = "Buenas tardes ";
    } else {
      saludo = "Buenas noches ";
    }
  } else if(idioma.value == "EN")
  {
    if (horaActual >= 6 && horaActual < 12) {
      saludo = "Good Morning ";
    } else if (horaActual >= 12 && horaActual < 19) {
      saludo = "Good Afternoon ";
    } else {
      saludo = "Good Evening ";
    }
  }
  else
  {
    saludo = "Antes de ser saludado, elige un idioma ";
  }
  return saludo;
}

export default f_saludohora;
