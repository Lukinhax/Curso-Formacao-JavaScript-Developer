/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas: 
1- Preço do combústivel;
2- Gasto médio de um combústivel do carro por KM;
3- Distãncia em KM da viagem;

Imprima no console o valor que sera gasto de combustível para realizar esta viagem.
*/

const preco_combustivel = 6.17;
let km_por_litro = 10;
let distancia_viagem = 100;
let litros_gastos;
let gasto_combustivel_viagem;

litros_gastos = distancia_viagem / km_por_litro;

gasto_combustivel_viagem = litros_gastos * preco_combustivel;

console.log('O valor gasto em combustível para realizar esta viagem é de R$' + gasto_combustivel_viagem.toFixed(2));