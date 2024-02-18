const pessoa = {
    nome: "Misha",
    idade: 29,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

const atributo = 'idade';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';