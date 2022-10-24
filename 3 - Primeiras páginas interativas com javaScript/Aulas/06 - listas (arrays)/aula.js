

/* 
const alunos = ['Joao','Daniel','Pedro']  //LISTAS DE STRING

alunos.push('Josue')   //ADICIONAR ALGO NA LISTA.
alunos[4] = 'Camila' // ADICIONAR DIRETAMENTE NA POSIÇÃO QUATRO.

console.log(alunos[1])     //-> POSICAO/ELEMENTO [1] É O DANIEL.

alunos.pop(); //REMOVE O ULTIMO ELEMENTO DA LISTA.
alunos.shift(); //REMOVE O PRIMEIRO ELEMENTO DA LISTA.
console.log(alunos.length); //SABER QUANTOS ITENS TEM NA LISTA.
 */

/* 
// EXEMPLO - ADICIONAR E REMOVER NA LISTA

const alunos = [];

alunos.push('Caroline');
alunos.push('Andressa');
console.log(alunos);
console.log(alunos.pop());
console.log(alunos);
 */



/* 

//EXEMPLO - MÉDIA DAS NOTAS DA LISTA. 

const notas = []

notas.push(5);
notas.push(8);
notas.push(7);
notas.push(4);
notas.push(9);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / 5);

 */

/* 
//EXERMPLO - ESTRUTURA DE REPETIÇÃO FOR

//let index = 0; -  VALOR INICIAL DA CONTAGEM 
//index < soma.length; - ESTRUTURA CONDICIONAL, CONTAGEM ATÉ QUE RETORNE 'FALSE'.
//index++ - ADICINAR MAIS 1 A CONTAGEM ATÉ QUE ACABE .

for (let index = 0; index < soma.length; index++) {
    console.log(index);
}
 */

/* 
//EXEMPLO - CONTANDO LETRA A LETRA

const nome = 'Daniel Teles Batista';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

 */

/* 
//EXEMPLO - PERCORRER NOTAS E SOMAR A MEDIA DINAMICAMENTE .

const notas  = []

notas.push(5);
notas.push(6);
notas.push(2);
notas.push(8);
notas.push(9);
notas.push(6);
notas.push(10);
notas.push(7);

let soma = 0;

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);
 */


//EXEMPLO - 
