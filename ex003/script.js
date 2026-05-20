/* Condições- IF e ELSE */
var nota1 = 6.5;
var nota2 = 7;
var nota3 = 10;
var nota4 = 9.3;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`A média do aluno é ${media}`)
var situacao = '';
if (media >= 7)
    situacao = 'aprovado'
else if (media >=5<7)
    situacao = "Recuperação"
else 
    situacao = 'reprovado'
console.log(`O aluno está ${situacao}`)