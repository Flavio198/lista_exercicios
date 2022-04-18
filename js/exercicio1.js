let valor1 = Number(window.prompt("Digite o primeiro valor:"));

let valor2 = Number(window.prompt("Digite o segundo valor:"));

let valor3 = Number(window.prompt("Digite o terceiro valor:"));

if (valor1 !== valor2 && valor2 !== valor3 && valor1 !== valor3) {
  let soma = valor1 + valor2 + valor3;

  window.alert(soma);

  let media = soma / 3;

  window.alert(media);

  let produto = valor1 * valor2 * valor3;

  window.alert(produto);

  // BUSCA O MENOR
  if (valor1 < valor2 && valor1 < valor3) {
    // VALOR 1 MENOR
    window.alert(`${valor1} é o menor valor.`);
  } else if (valor2 < valor1 && valor2 < valor3) {
    // VALOR 2 MENOR
    window.alert(`${valor2} é o menor valor.`);
  } else {
    // VALOR 3 MENOR
    window.alert(`${valor3} é o menor valor.`);
  }

  if (valor1 > valor2 && valor1 > valor3) {
    window.alert(`${valor1} é o maior valor.`);
  } else if (valor2 > valor1 && valor2 > valor3) {
    window.alert(`${valor2} é o maior valor.`);
  } else {
    window.alert(`${valor3} é o maior valor.`);
  }
} else {
  window.alert("Voce repetiu algum numero na digitação!");
}
