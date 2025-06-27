// Parte 1 - Variáveis e Operadores

let variavel1 = 10;

console.log(variavel1);

variavel1 = 20;

console.log(variavel1);

const pi = 3.14;

console.log('Imprimir algo');

let soma = 10 + 10;
console.log('soma de 10 + 10 = ' + soma);

let subtracao = 10 - 5;
console.log('subtração de 10 - 5 = ' + subtracao);

let multiplicacao = 10 * 5;
console.log('multiplicação de 10 x 5 = ' + multiplicacao);

let divisao = 10 / 5;
console.log('divisão de 10 / 5 = ' + divisao);

// Parte 2 - Estruturas Condicionais

const numero = 2;
const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0){
    console.log('O número é inválido');
}else if(numeroDivisivelPor5){
    console.log('Sim');
}else{
    console.log('Não');
}