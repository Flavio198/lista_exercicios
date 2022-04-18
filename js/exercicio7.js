let eleitores = Number(
  window.prompt("Digite o total de eleitores do município: ")
);
let somaVotos = 0;
let percentual = 0;

let branco = Number(
  window.prompt("Digite o total de votos brancos do município: ")
);
if (branco > eleitores) {
  alert("Você digitou um valor que excede o número total de eleitores.");
} else {
  let nulos = Number(
    window.prompt("Digite o total votos brancos do município: ")
  );
  somaVotos = branco + nulos;
  if (somaVotos > eleitores) {
    alert("Você digitou um valor que excede o número total de eleitores.");
  } else {
    let validos = Number(
      window.prompt("Digite o total de votos válidos do município: ")
    );
    somaVotos += validos;
    if (somaVotos > eleitores) {
      alert("Você digitou um valor que excede o número total de eleitores.");
    } else {
      if (somaVotos === eleitores) {
        percentual = (branco * 100) / eleitores;
        window.alert(`${percentual}% de votos Brancos.`);
        console.log(`${percentual}% de votos Brancos.`);

        percentual = (nulos * 100) / eleitores;
        window.alert(`${percentual}% de votos Nulos.`);
        console.log(`${percentual}% de votos Nulos.`);

        percentual = (validos * 100) / eleitores;
        window.alert(`${percentual}% de votos Válidos.`);
        console.log(`${percentual}% de votos Válidos.`);
      } else {
        window.alert(
          "ERRO!Não foi possível valcular o percentual exato dos votos. Reveja os dados informados."
        );
      }
    }
  }
}
