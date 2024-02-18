/*
Cálculo de Valor de Uma Viagem

5 variáveis:
- preço etanol;
- preço gasolina;
- distância da viagem (em Km);
- gasto médio de combustível por Km;
- tipo de combustível.

*/

let Gasolina = 5.75;
let Etanol = 3.42;
let kmPorLitros = 10;
let distanciaEmKm = 100;
let tipoCombustivel = Gasolina;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === Etanol) {
    valorTotalGasto = litrosConsumidos * Etanol;
} else {
    valorTotalGasto = litrosConsumidos * Gasolina;
}

console.log(`O valor total gasto na viagem foi R$${valorTotalGasto.toFixed(2)}.`);