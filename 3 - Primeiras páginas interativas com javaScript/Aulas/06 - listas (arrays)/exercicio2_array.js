// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.


/* 
//IMPRIMINDO NÚMEROS NA TELA
const numeros = [7,15,3,6,24,3,0,151,502];

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    console.log(numero);
}
 */
//IMPRIMINDO NÚMEROS PARES
const numeros = [7,15,3,6,24,3,0,151,502];

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];

    if (numero % 2 === 0) {
        console.log(numero);
    }
}