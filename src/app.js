/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const palo = ["♦", "♥", "♠", "♣"];
const numero = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let inputAlto = document.getElementById("cambioAlto");
let inputAncho = document.getElementById("cambioAncho");
let divQueCambia = document.getElementById("modificable");
let parteArriba = document.getElementById("paloArriba");
let parteAbajo = document.getElementById("paloAbajo");
let numeroCarta = document.getElementById("numeroCarta");
let boton = document.getElementById("botonrobar");
let randomCada10Secs;
window.onload = function() {
  randomiser();
  randomCada10Secs = setInterval(randomiser, 10000);
};
function randomiser() {
  let randompalo = Math.floor(Math.random() * palo.length);
  let randomnumero = Math.floor(Math.random() * numero.length);
  let paloRandom = palo[randompalo];
  let numeroRandom = numero[randomnumero];
  parteArriba.innerHTML = paloRandom;
  numeroCarta.innerHTML = numeroRandom;
  parteAbajo.innerHTML = paloRandom;
  if (paloRandom == palo[0] || paloRandom == palo[1]) {
    parteArriba.style.color = "red";
    parteAbajo.style.color = "red";
  } else {
    parteArriba.style.color = "black";
    parteAbajo.style.color = "black";
  }
}
boton.addEventListener("click", randomiser);
function cambiarAlto(event) {
  if (event.key == "Enter") {
    let carta = document.querySelector(".card");
    carta.style.height = inputAlto.value;
  }
}
function cambiarAncho(event) {
  if (event.key == "Enter") {
    let carta = document.querySelector(".card");
    carta.style.width = inputAlto.value;
  }
}
inputAlto.addEventListener("keypress", cambiarAlto);
inputAncho.addEventListener("keypress", cambiarAncho);
