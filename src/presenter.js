import f_saludo from "./f_saludo";
import f_saludohora from "./f_saludohora_idioma";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (idioma.value=="EN")
    div.innerHTML = "<b><h3>GREETER</h3></b><br>";
  else
    div.innerHTML = "<b><h3>SALUDADOR</h3></b><br>";
  div.innerHTML += f_saludohora(idioma) + f_saludo(genero,edad,idioma) + " " + nombre.value;

});



