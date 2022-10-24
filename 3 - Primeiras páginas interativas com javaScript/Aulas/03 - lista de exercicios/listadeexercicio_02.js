/*
    2) O IMC - É UM CRITÉRIO DA OMS PARA DAR UMA INDICAÇÃO SOBRE A CONDIÇÃO DE PESO DE UMA PESSOA ADULTA.

    FORMULA DO IMC:
    IMC = PESO / (ALTURA * ALTURA)

    ELABORE UM ALGORITMO QUE DADO O PESO E A ALTURA DE UM ADULTO MOSTRE SUA CONDIÇÃO DE ACORDO COM A TABELA ABAIXO.

    IMC EM ADULTOS CONDIÇÃO:
    - ABAIXO DE 18.5 -> ABAIXO DO PESO.
    - ENTRE 18.5 E 25 -> PESO NORMAL.
    - ENTRE 25 E 30 -> ACIMA DO PESO.
    - ENTRE 30 E 40 -> OBESO.
    - ACIMA DE 40 -> OBESIDADE GRAVE.
*/

const peso = 65;
const altura = 1.70;
const imc = peso / Math.pow(2, altura);
console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normla');
} else if ( imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}