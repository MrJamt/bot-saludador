function f_saludo(genero,edad) {
  let ini = " ";
  if(genero.value == "Mujer")
  {
    if(edad.value > 30)
    { ini = "Sra. "}
    else { ini = "Estimada " }
  }
  else
  {
    if (genero.value == "Hombre")
    {
      if(edad.value > 30)
      { ini = "Sr. "}
      else { ini = "Estimado " }
    }
  }
  return ini;
}

export default f_saludo;
