"use strict";
function agregar(valor) {
    let pantalla = document.getElementById("pantalla");
    pantalla.value += " " + valor;
}
function calcular() {
    let valorPantalla = document.getElementById("pantalla");
    const resultado = eval(valorPantalla.value);
    valorPantalla.value = resultado;
}
function limpiarPantalla() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}
