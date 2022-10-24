/* //EXEMPLO 01 - IMPRIMINDO MEU NOME MAIOR E MENOS

function escrevaMeuNome(nome) {
    return 'Meu nome é: ' + nome; 
}
function verificarIdade(idade) {
    if (idade >=18) {
        console.log(escrevaMeuNome('Daniel, ') + 'eu sou de maior.');
    } else {
        console.log('sou de menor.');
    }
}
verificarIdade(18); */



// EXEMPLO 02 - JUROS COM FUNÇÕES 

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100 )));
}
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100 )));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) { 
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}

console.log(200 * 0.10);
console.log(10 / 100);