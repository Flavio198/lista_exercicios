let valor1 = Number(window.prompt("Digite um número: "));

if (valor1 > 0) {
  if (valor1 % 2 === 0) {
    window.alert("Número é par!");
  } else {
    window.alert("Número é impar!");
  }
} else {
  window.alert("Valor Inválido!");
}
