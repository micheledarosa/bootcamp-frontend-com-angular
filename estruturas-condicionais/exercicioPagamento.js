/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - à vista débito, 10% desconto;
2 - à vista dinheiro ou PIX, 15% desconto;
3 -  em até 2x no cartão, preço normal;
4 -  3x ou mais no cartão, 10% juros.
*/

const precoProduto = 100;
const formaPagamento = 4;

const valorFinalProduto = formaPagamento === 1 ? precoProduto - (precoProduto * 0.1)
    : formaPagamento === 2 ? precoProduto - (precoProduto * 0.15)
    : formaPagamento === 3 ? precoProduto
    : precoProduto + (precoProduto * 0.1);

console.log(`Valor final do produto: R$${valorFinalProduto.toFixed(2)}`);