function f_saludo(genero,edad,idioma) {
  let ini = " ";
  if(idioma.value == "ES")
  {
    if(genero.value == "Mujer")
    {
      if(edad.value > 30)
      { ini = "sra. "}
      else { ini = "estimada " }
    }
    else
    {
      if (genero.value == "Hombre")
      {
        if(edad.value > 30)
        { ini = "sr. "}
        else { ini = "estimado " }
      }
    }
  }
  else  if(idioma.value == "EN")
  {
    if(genero.value == "Mujer")
    {
      if(edad.value > 30)
      { ini = "mrs. "}
      else { ini = "dear " }
    }
    else
    {
      if (genero.value == "Hombre")
      {
        if(edad.value > 30)
        { ini = "mr. "}
        else { ini = "dear " }
      }
    }
  }
  return ini;
}

export default f_saludo;
