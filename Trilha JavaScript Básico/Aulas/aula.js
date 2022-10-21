

/* CLASSES */
// CLASSE É UMA DEFINIÇÃO E INSTANCIA É UMA OCORRENCIA
class Pessoa {   //SERVE PARA DEFINIR COMO ALGO SERÁ INSTANCIADO (que é uma ocorrencia de uma pessoa)
    nome;
    idade;

    descrever () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const daniel = new Pessoa();
daniel.nome = 'Daniel ';
daniel.idade = 26;

const jessica = new Pessoa();
jessica.nome = 'Jessica';
jessica.idade = 26;

console.log(daniel);
console.log(jessica);

daniel.descrever();
jessica.descrever();


/* OBJETOS SÃO MUITO UTILIZADOS - MAIS NÃO IMAGINAMOS QUE ESTAMOS UTILIZANDO */

/* const pessoa = {
    nome: 'Daniel Teles Batista',
    idade: 26,

    descrever: function () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
};

console.log(descrever); */

/* console.log(daniel.nome, daniel.idade);
console.log(daniel);

daniel.altura =  1.75;  //INCREMENTANDO OU ADICIONANDO VALOR 
delete vitor.nome; //REMOVENDO VALOR 

 */