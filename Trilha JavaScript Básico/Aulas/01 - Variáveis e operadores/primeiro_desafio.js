/*
Faça um programa para calcular o valor gasto de combustivel em uma viagem ! 

Você tera três variáveis. Sendo elas:
-Preço do combustivel;
-Gasto médio de combustivel do carro por KM;
-Distância em KM da viage;
Imprima no console o valor que será gasto de combustivel para realizar esta viagem. 

toFixed() - Arredondamento de valor quebrado.

 */
const precoCombustivel = 4.79;
const kmPorLitros = 6.3;
const distanciaEmKm = 156;

const litrosConsumidos  = distanciaEmKm / kmPorLitros;
const valorGastoCombustivel = litrosConsumidos * precoCombustivel;

console.log(valorGastoCombustivel.toFixed(2));
