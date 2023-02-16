function f_genero(genero) {
  let ini = " ";
  if(genero.value == "Mujer")
  {
    ini = "Estimada "
  }
  else
  {
    if (genero.value == "Hombre")
    {
      ini = "Estimado ";
    }
    else
    {
      if (genero.value == "Otre")
      {
        ini = "Estimade ";
      } 
    }
  }
  return ini;
}

export default f_genero;
