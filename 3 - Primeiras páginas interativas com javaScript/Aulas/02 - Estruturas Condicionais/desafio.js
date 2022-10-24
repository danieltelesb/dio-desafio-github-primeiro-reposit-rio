/*
Faça um programa para calcular o valor gasto de combustivel em uma viagem ! 

Você tera 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro ;
4 - Gasto médio de combustivel do carro por KM ;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem. 

toFixed() - Arredondamento de valor quebrado.

*/

const precoEtanol = 3.49;
const precoGasolina = 4.69;
const kmPorLitros = 6.3; 
const distanciaEmKm = 185;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos =  distanciaEmKm / kmPorLitros;
if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}



