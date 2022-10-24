/* 
    1) - FAÇA UM ALGORITMO QUE DADO AS 3 NOTAS TIRADAS POR UM ALUNO EM UM SEMESTRE DA FACULDADE CALCULE E UMPRIMA A
    SUA MÉDIA E A SUA CLASSIFICAÇÃO CONFORME A TABELA ABAIXO:

    MÉDIA = (NOTA 1 + NOTA 2 + NOTA 3) / 3;

    CLASSIFICAÇÃO :
    - MÉDIA MENOR QUE 5, REPRODADO;
    - MÉDIA ENTRE 5 E 7, RECUPERAÇÃO;
    - MÉDIA ACIMA DE 7, APROVADO; 
*/

const nota1 = 5;
const nota2 = 1;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Que pena, você foi reprovado');
} else if (media >= 5 && media <=7) {
    console.log('Recuperação!!! ')
} else {
    console.log('Você foi aprovado')
}


