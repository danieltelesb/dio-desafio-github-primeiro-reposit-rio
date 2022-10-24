
/* 
    FUNÕES SÃO PEQUENOS TRECHOS DE CÓDIGOS QUE PODER SER USADO A QUALQUER MOMENTO.

*/

/*
//EXEMPLO 01
function teste() {    //Primeiro chama o FUNCTION depois se dá o nome da FUNCTION e entre parenteses se passa os PARAMETROS da FUNCTION.
    console.log('teste');
}
teste(); //AQUI SE CHAMA A FUNÇÃO QUANTAS VEZES FOREM NECESSARIAS. 
*/


/*
// EXEMPLO 02
function sayMyName() {
    console.log('Your name is:' + name);
}
sayMyName(' Daniel');
sayMyName(' Fernando');
*/


/*
//EXEMPLO 03  -  AO QUADRADO
function quadrado(valor) {
    return valor * valor;
}
const quandradoDoValor = quadrado(10) + quadrado(20);
console.log(quandradoDoValor);
*/

/*
//EXEMPLO 04 - valor em juros
function incrementarJuros(valor, percentialJuros) {
    const valorDeAcrecimo = (percentialJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(100, 10));
*/


/*
//ORGANIZANDO O CÓDIGO
//CÓDIGO PRINCIPAL FICARA DENTRO DA FUNÇÃO MAIN
//FORA DO MAIN SERÁ CALCULADO AS FUNÇÕES QUE FOREM NECESSARIAS

function calcularJuros() {

}

function main() {
    console.log('Programa principal')
    calcularJuros();
}
main();
*/

/*
//QUEBRANDO O CÓDIGO EM FUNÇÕES

function calcularImc(peso, altura) {
    return peso / Math.pow (altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return('Peso normal');
    } else if ( imc >= 25 && imc < 30) {
        return('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return('Obeso');
    } else {
        return('Obesidade grave');
    } 
}
function main() { //FUNCÃO QUANDO REFERENCIADA É COMO SE FOSSE UMA VARIAVEL, CONSEGUIMOS CHAMAR ELA DEPOIS . 
    const peso = 80;
    const altura = 1.70;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
main();

//FUNÇÕES EM JS SÃO COMO FUNÇÕES/OBJETOS 
//PARA EXECUTAR A FUNÇÃO UMA SÓ VEZ COLOCAMOS UM (); ENVOLVENDO A FUNÇÃO. AO TERMINO DAS OPERAÇÕES NÃO SERÁ NECESSARIO CHAMAR A 
//FUNÇÃO NOVAMENTE. E TAMBÉM PODEMOS RETIRAR O NOME DA FUNÇÃO TORNANDO-A FUNÇÃO NÃO NOMEADA. 
 
*/
