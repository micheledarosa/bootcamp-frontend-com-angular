/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer o valor do seu IMC e sua condição.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();
        return imc < 18.5 ? "abaixo do peso" :
            imc >= 18.5 && imc <= 25 ? "peso normal" :
            imc > 25 && imc <= 30 ? "acima do peso" :
            imc > 30 && imc <= 40 ? "obeso" :
            "obesidade grave";
    }
}


const jose = new Pessoa('José', 150, 1.75);

console.log(`Meu nome é ${jose.nome}, meu IMC é ${jose.calcularImc().toFixed(1)} e minha condição é ${jose.classificarImc()}`);