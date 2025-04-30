window.onload = () => {
  botones();
};

function agregar(valor: string): void {
  const pantalla = document.getElementById("pantalla") as HTMLInputElement;
  pantalla.value += valor;
}

function calcular(): void {
  const pantalla = document.getElementById("pantalla") as HTMLInputElement;

  pantalla.value = eval(pantalla.value);
}

function limpiarPantalla(): void {
  const pantalla = document.getElementById("pantalla") as HTMLInputElement;
  pantalla.value = "";
}

function botones(): void {
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

  const contenedor = document.getElementById("botones") as HTMLButtonElement;

  botones.forEach((valor: string) => {
    const boton = document.createElement("button") as HTMLButtonElement;
    boton.innerText = valor;

    boton.onclick = () => {
      if (valor === "C") limpiarPantalla();
      else if (valor === "=") calcular();
      else agregar(valor);
    };
    contenedor.appendChild(boton);
  });
}
