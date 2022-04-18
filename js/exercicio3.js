let a = Number(prompt("Digite lado a"));
let b = Number(prompt("Digite lado b"));
let c = Number(prompt("Digite lado c"));

if (a < b + c && b < a + c && c < a + b) {
  if (a === b && a === c && b === c) {
    alert("Equilatero!");
  } else if (a === b || a === c || b === c) {
    alert("isósceles");
  } else if (a !== b && b !== c && a !== c) {
    alert("escaleno!");
  }
} else {
  alert("Não é um triangulo!");
}
