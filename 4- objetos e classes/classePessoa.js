class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const misha = new Pessoa();
misha.nome = 'Michele da Rosa Lopes';
misha.idade = 29;

const jean = new Pessoa();
jean.nome = 'Jean Henrique Silva';
jean.idade = 23;

const zu = new Pessoa('Zuleica', 72);

console.log(zu);

misha.descrever();
jean.descrever();

function compararPessoas(p1, p2) {
    pessoaMaisVelha = p1.idade > p2.idade ? console.log(`${p1.nome} é a pessoa mais velha`) 
    : p1.idade < p2.idade ? console.log(`${p2.nome} é a pessoa mais velha`) 
    : console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
}

compararPessoas(misha, jean);