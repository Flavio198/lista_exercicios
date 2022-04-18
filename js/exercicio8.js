let precoTabela = parseFloat(
  window.prompt("Digite o preço de tabela do produto: ")
); // ex: 129,90
let qtdParcelas = Number(window.prompt("Digite a quantidade de parcelas: ")); // ex: 1, 2, 3, 4 ...

let valorParcela;
let precoTotalCompra;
let desconto = (2.5 / 100) * precoTabela;
let acrescimo;

if (qtdParcelas <= 0) {
  alert("Número de parcelas inválido. Reinicie a operação!");
} else if (qtdParcelas === 1) {
  totalCompra = precoTabela - desconto;

  alert(`
        Preço de tabela: R$${precoTabela.toFixed(2)} \n
        Número de parcelas: ${qtdParcelas} \n
        Compra a vista com R$${desconto.toFixed(2)} de desconto\n
        Preço total: R$${totalCompra.toFixed(2)}
    `);
} else if (qtdParcelas <= 5) {
  totalCompra = precoTabela;
  valorParcela = totalCompra / qtdParcelas;

  alert(`
        Preço de tabela: R$${precoTabela.toFixed(2)} \n
        Número de parcelas: ${qtdParcelas} \n
        Compra a prazo pelo preço de tabela\n
        Preço total: R$${totalCompra.toFixed(2)} \n
        Valor da parcela: R$${valorParcela.toFixed(2)}
    `);
} else if (qtdParcelas <= 10) {
  acrescimo = (6.0 / 100) * precoTabela;
  totalCompra = precoTabela + acrescimo;
  valorParcela = totalCompra / qtdParcelas;

  alert(`
        Preço de tabela: R$${precoTabela.toFixed(2)} \n
        Número de parcelas: ${qtdParcelas} \n
        Compra a prazo com R$${acrescimo.toFixed(2)} de acréscimo\n
        Preço total: R$${totalCompra.toFixed(2)} \n
        Valor da parcela: R$${valorParcela.toFixed(2)}
    `);
} else if (qtdParcelas <= 15) {
  acrescimo = (13.0 / 100) * precoTabela;
  totalCompra = precoTabela + acrescimo;
  valorParcela = totalCompra / qtdParcelas;

  alert(`
        Preço de tabela: R$${precoTabela.toFixed(2)} \n
        Número de parcelas: ${qtdParcelas} \n
        Compra a prazo com R$${acrescimo.toFixed(2)} de acréscimo\n
        Preço total: R$${totalCompra.toFixed(2)} \n
        Valor da parcela: R$${valorParcela.toFixed(2)}
    `);
}
