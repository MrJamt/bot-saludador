import f_saludo from "./f_saludo";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  div.innerHTML = "Hola "+ f_saludo(genero,edad) + " " + nombre.value;
});


