

/* CLASSES */
// CLASSE É UMA DEFINIÇÃO E INSTANCIA É UMA OCORRENCIA
class Pessoa {   //SERVE PARA DEFINIR COMO ALGO SERÁ INSTANCIADO (que é uma ocorrencia de uma pessoa)
    nome;
    idade;
    anoDeNascimento;

    constructor() {
        this.nome = 'Daniel';
        this.idade = 25;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const daniel = new Pessoa('Daniel', 26);
const jessica = new Pessoa('Renan', 30);
console.log(daniel);

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log('${p1.nome} é mais velho(a) que ${p2.nome}');
    } else if (p2.idade > p1.idade) {
        console.log('${p2.nome} é mais velho(a) que ${p.nome}');
    } else {
        console.log('${p1.nome} e ${p2.nome} tem a mesma idade');
}

const daniel = new Pessoa('Daniel', 30);
const jessica = new Pessoa('Jessica', 26);

compararPessoas(daniel, jessica);