"use strict";
window.onload = () => {
    botones();
};
function agregar(valor) {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += " " + valor;
}
function calcular() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = eval(pantalla.value);
}
function limpiarPantalla() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}
function botones() {
    const botones = [
        "1",
        "2",
        "3",
        "+",
        "4",
        "5",
        "6",
        "-",
        "7",
        "8",
        "9",
        "*",
        "0",
        ".",
        "/",
        "=",
        "C",
    ];
    const contenedor = document.getElementById("botones");
    botones.forEach((valor) => {
        const boton = document.createElement("button");
        boton.innerText = valor;
        boton.onclick = () => {
            if (valor === "C")
                limpiarPantalla();
            else if (valor === "=")
                calcular();
            else
                agregar(valor);
        };
        contenedor.appendChild(boton);
    });
}
