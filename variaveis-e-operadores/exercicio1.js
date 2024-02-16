/*
Cálculo de Valor de Uma Viagem

3 variáveis:
- preço combustível;
- distância da viagem (em Km);
- gasto médio de combustível por Km.

*/

let precoCombustivel = 5.75;
let kmPorLitros = 10;
let distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const  valorTotalGasto = litrosConsumidos * precoCombustivel;

console.log(`O consumo de combustível foi de ${litrosConsumidos} litros`);
console.log(`O valor total da viagem é R$${valorTotalGasto.toFixed(2)}`);
