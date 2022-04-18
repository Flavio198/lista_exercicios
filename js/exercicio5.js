let valorA = Number(prompt("Digite o valor de A: "));
let valorB = Number(prompt("Digite o valor de B: "));
let aux = valorA; //memoriza o valor "A" para aguardar a troca de conteúdo entre "A" e "B"

valorA = valorB;
valorB = aux;

alert(`Ovalor armazenado em A é ${valorA}`);
alert(`Ovalor armazenado em B é ${valorB}`);
