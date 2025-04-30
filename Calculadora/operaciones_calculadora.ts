function agregar(valor: string): void {
  let pantalla = document.getElementById("pantalla") as HTMLInputElement;
  pantalla.value += " " + valor;
}

function calcular(): void {
  let valorPantalla = document.getElementById("pantalla") as HTMLInputElement;
  const resultado = eval(valorPantalla.value);
  valorPantalla.value = resultado;
}

function limpiarPantalla(): void {
  const pantalla = document.getElementById("pantalla") as HTMLInputElement;
  pantalla.value = "";
}
