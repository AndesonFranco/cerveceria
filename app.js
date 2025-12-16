// console.log('JS cargado correctamente en Cafeteria Motitas')

// alert('Bienvenido a cafetieria motitas (soy nuevo, no me echen, por favor.)')

// seleccionar el elemento en el DOM
const tituloPrincipal = document.querySelector("#titulo-principal");

// lo muestro por conosola

console.log("titulo principal:", tituloPrincipal);

// cambio el texto dentro del selector, sin cambiar directamente el HTML

tituloPrincipal.textContent = "Cerveceria la ultima y nos vamos";

// MODO NOCHE.

// 1. Seleccionamos el boton y el body

const botonModoNoche = document.querySelector("#btn-modo-noche");
const body = document.body;

// 2. agregamos el evento.
botonModoNoche.addEventListener("click", function () {
  // alternar la clase 'modo-noche' en el body
  body.classList.toggle("modo-noche");

  // actualizar el texto del boton segun el estado.
  if (body.classList.contains("modo-noche")) {
    botonModoNoche.textContent = "Desactivar el modo noche";
  } else {
    botonModoNoche.textContent = "Activar modo noche";
  }
});

// contador de cafes

// 1. seleccionamos elementos:

const spanContadorCervesaNegra = document.querySelector(
  "#contador-cervesa-negra"
);
const botonAgregarCervesaNegra = document.querySelector(
  "#btn-agregar-cervesa-negra"
);
const botonQuitarCervesaNegra = document.querySelector(
  "#btn-quitar-cervesa-negra"
);

// 2. variable contadora

let cantidadCervesaNegra = 0;

// 3. escuchar el click del boton para ejecutar logica

botonAgregarCervesaNegra.addEventListener("click", function () {
  cantidadCervesaNegra++;
  spanContadorCervesaNegra.textContent = cantidadCervesaNegra;

  console.log("cervesa pedidos hasta ahora: ", cantidadCervesaNegra);
});

botonQuitarCervesaNegra.addEventListener("click", function () {
  cantidadCervesaNegra--;
  spanContadorCervesaNegra.textContent = cantidadCervesaNegra;

  console.log("cervesa pedidos hasta ahora: ", cantidadCervesaNegra);
});

// 1. seleccionamos elementos:

const spanContadorCervesaRosadita = document.querySelector(
  "#contador-cervesa-rosadita"
);
const botonAgregarCervesaRosadita = document.querySelector(
  "#btn-agregar-cervesa-rosadita"
);
const botonQuitarCervesaRosadita = document.querySelector(
  "#btn-quitar-cervesa-rosadita"
);

// 2. variable contadora

let cantidadCervesaRosadita = 0;

// 3. escuchar el click del boton para ejecutar logica

botonAgregarCervesaRosadita.addEventListener("click", function () {
  cantidadCervesaRosadita++;
  spanContadorCervesaRosadita.textContent = cantidadCervesaRosadita;

  console.log("cervesa pedidos hasta ahora: ", cantidadCervesaRosadita);
});

botonQuitarCervesaRosadita.addEventListener("click", function () {
  cantidadCervesaRosadita--;
  spanContadorCervesaRosadita.textContent = cantidadCervesaRosadita;

  console.log("cervesa pedidos hasta ahora: ", cantidadCervesaRosadita);
});

// 1. seleccionamos elementos:

const spanContadorCervesaLigth = document.querySelector(
  "#contador-cervesa-ligth"
);
const botonAgregarCervesaLigth = document.querySelector(
  "#btn-agregar-cervesa-ligth"
);
const botonQuitarCervesaLigth = document.querySelector(
  "#btn-quitar-cervesa-ligth"
);

// 2. variable contadora

let cantidadCervesaLigth = 0;

// 3. escuchar el click del boton para ejecutar logica

botonAgregarCervesaLigth.addEventListener("click", function () {
  cantidadCervesaLigth++;
  spanContadorCervesaLigth.textContent = cantidadCervesaLigth;

  console.log("cervesa pedidos hasta ahora: ", cantidadCervesaLigth);
});

botonQuitarCervesaLigth.addEventListener("click", function () {
  cantidadCervesaLigth--;
  spanContadorCervesaLigth.textContent = cantidadCervesaLigth;

  console.log("cervesa pedidos hasta ahora: ", cantidadCervesaLigth);
});

const spanContadorCervesaRelax = document.querySelector(
  "#contador-cervesa-relax"
);
const botonAgregarCervesaRelax = document.querySelector(
  "#btn-agregar-cervesa-relax"
);
const botonQuitarCervesaRelax = document.querySelector(
  "#btn-quitar-cervesa-relax"
);

// 2. variable contadora

let cantidadCervesaRelax = 0;

// 3. escuchar el click del boton para ejecutar logica

botonAgregarCervesaRelax.addEventListener("click", function () {
  cantidadCervesaRelax++;
  spanContadorCervesaRelax.textContent = cantidadCervesaRelax;

  console.log("cervesa pedidos hasta ahora: ", cantidadCervesaRelax);
});

botonQuitarCervesaRelax.addEventListener("click", function () {
  cantidadCervesaRelax--;
  spanContadorCervesaRelax.textContent = cantidadCervesaRelax;

  console.log("cervesa pedidos hasta ahora: ", cantidadCervesaRelax);
});
