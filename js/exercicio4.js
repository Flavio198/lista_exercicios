let anoAtual = Number(prompt("Digite o ano atual"));
let anoNascimento = Number(prompt("Digite o ano de nascimento"));
let idade = anoAtual - anoNascimento;

if (idade >= 16) {
  window.alert("Você já pode votar");
} else {
  window.alert("Você não pode votar");
}
