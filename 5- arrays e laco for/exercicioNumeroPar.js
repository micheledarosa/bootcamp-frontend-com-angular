// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [2, 5, 6, 7, 8, 10];

for (let i = 0; i < numeros.length; i++) {
    numeros[i] % 2 === 0 ? console.log(numeros[i]) : '';
}