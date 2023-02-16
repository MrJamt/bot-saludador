import f_genero from "./f_genero";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  
  //div.innerHTML = "Hola "+ ini.toString() + " " + nombre.value;
  div.innerHTML = "Hola "+ f_genero(genero) + " " + nombre.value;
  //div.innerHTML = ini.length;
});

