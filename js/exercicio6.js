let Fahrenheit = parseFloat(
  window.prompt("Digite a temperatura em Fahrenheit: ")
);
let Celsius = (Fahrenheit - 32) / 1.8;

window.alert(`${Fahrenheit} °F Equivale a ${Celsius.toFixed(1)} °C`);
