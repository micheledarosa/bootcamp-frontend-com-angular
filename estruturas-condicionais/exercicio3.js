/*
Faça um algoritmo, que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3 ) / 3;

Classificação:
- média menor que 5, reprovação;
- média entre 5 e 7, recuperação;
- média acima de 7, passou de semestre;
*/

let nota1 = 8;
let nota2 = 3;
let nota3 = 1;

const media = (nota1 + nota2 + nota3) / 3;
const mediaFormatada = media.toFixed(1)

const statusDoAluno = mediaFormatada < 5 ? "Reprovado"
    : mediaFormatada >= 5 && mediaFormatada <= 7 ? "Recuperação"
    : "Aprovado";

console.log(`Média: ${mediaFormatada}, ${statusDoAluno}`)