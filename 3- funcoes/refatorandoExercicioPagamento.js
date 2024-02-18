/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - à vista débito, 10% desconto;
2 - à vista dinheiro ou PIX, 15% desconto;
3 -  em até 2x no cartão, preço normal;
4 -  3x ou mais no cartão, 10% juros.
*/

function aplicarDesconto(valor, desconto) {
    return valorComDesconto = valor - (valor * (desconto / 100));
}


function aplicarJuros(valor, juros) {
    return valorComJuros = valor + (valor * (juros / 100));
}

const precoProduto = 100;
const pagamentoSelecionado = 4;

const formaPagamento = pagamentoSelecionado  === 1 ? aplicarDesconto(precoProduto, 10)
    : pagamentoSelecionado === 2 ? aplicarDesconto(precoProduto, 15)
    : pagamentoSelecionado === 3 ? precoProduto
    : aplicarJuros(precoProduto, 10);

console.log(`Valor final do produto: R$${formaPagamento.toFixed(2)}`);