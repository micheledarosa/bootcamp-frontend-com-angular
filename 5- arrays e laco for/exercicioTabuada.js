// Crie um programa que dado um número imprima sua tabuada.

numero = 5;
console.log(`==Tabuada de ${numero}==`);

for (let i = 1; i <= 10; i++) {
    const tabuada = numero * i;
    console.log(`${numero} x ${i} = ${tabuada}`)
}

console.log("==============")