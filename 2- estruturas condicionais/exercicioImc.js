/*
Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

Formula do IMC: 
IMC = peso / (altura * altura)

IMC em adultos Condição:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade grave;

*/

const peso = 66;
const altura = 1.63;
const imc = peso / Math.pow(altura, 2);

const condicao = imc < 18.5 ? "Abaixo do peso" 
    : imc >= 18.5 && imc <= 25 ? "Peso normal"
    : imc > 25 && imc <= 30 ? "Acima do peso"
    : imc > 30 && imc <= 40 ? "Obeso"
    : "Obesidade Grave";

console.log(`IMC: ${imc.toFixed(1)}, Condição: ${condicao}`)
