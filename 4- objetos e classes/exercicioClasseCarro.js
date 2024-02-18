/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodados.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(km, preco) {
        const gasto = km * this.gastoMedioPorKm * preco
        return `O gasto em ${km}km de percurso é de R$${gasto.toFixed(2)}`
    }
}

const uno = new Carro('Fiat', 'Prata', 0.08);

console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Preta', 0.1);

console.log(palio.calcularGastoDePercurso(70, 5));
