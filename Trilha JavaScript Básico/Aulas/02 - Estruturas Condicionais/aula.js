/* variavel do tipo boleano 
true;
false;
*/

/* Resto da divisão  %  */
/*Sinal de igualdade no JS === ou == conversão implicita comvertendo a variavel em número '' */
/* */


/*EXEMPLO 01 - NUMERO PAR OU IMPAR*/
/*
const numero = 5;

const eNumeroPar = (numero % 2) === 0;
console.log(eNumeroPar);

if(eNumeroPar) {   // Se o número for Par
    console.log('Esse número é par')
}
if (!eNumeroPar){  // Se o número não for Par utiliza o ! 
    console.log('Esse número é ímpar')
}
*/

/*EXMPLO 02 - NUMERO PAR OU IMPAR 02 */
/*
const numero = 3;
const eNumeroPar = (numero % 2) === 0;

if(eNumeroPar) {   // Se o número for Par
    console.log('Esse número é par');
} else {  // Se o número não for Par use !
    console.log('Esse número é ímpar');
}

*/

/* EXEMPLO 03 - NUMERO DIVISIVEL POR 5*/
/*
const numero = 15
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numeroDivisivelPor5) {
    console.log('Sim');
}else {
    console.log('Não');
}
*/



/* EXEMPLO 04 - NUMERO INFORMADO É INVALIDO */

const numero = 0
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('Número invalido');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else { 
    console.log('Não');
}
