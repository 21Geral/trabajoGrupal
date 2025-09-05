let abrir = document.querySelector("#abrir");
let cerrar = document.querySelector("#cerrar");
let modal = document.querySelector("#modal");
let fondo = document.querySelector("#fondo");

abrir.addEventListener("click", function () {
  modal.classList.replace("hidden", "flex");
  fondo.classList.add("hidden");
});

cerrar.addEventListener("click", function () {
  modal.classList.add("hidden");
  fondo.classList.remove("hidden");
});

let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {};
  let nombre = document.querySelector("#nombre");
  let edad = document.querySelector("#edad");
  let pais = document.querySelector("#pais");
  console.log("formulario enviado por : " + nombre.value);
  obj.nombre = nombre.value;
  obj.edad = edad.value;
  obj.pais = pais.value;

  console.log(obj);
});
