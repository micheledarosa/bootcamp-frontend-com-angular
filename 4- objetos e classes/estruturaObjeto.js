const pessoa = {
    nome: "Misha",
    idade: 29,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa.descrever();

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.altura = 1.63;
console.log(pessoa.altura);

delete pessoa.idade;
console.log(pessoa);

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome} e minha altura é ${this.altura}`)
}

pessoa.descrever();