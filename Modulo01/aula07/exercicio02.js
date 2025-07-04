/*
    2)Faça um programa que receba N (quantidade de números) e seus repectivos valores 
    Imprima o maior número par e menor número impar

        Exemplo: 
            Entrada:
                5
                3
                4
                1
                10
                8

            Saída:
                Maior número par: 10
                Menor número impar: 1
*/

const {gets} = require('./funcoes-auxiliares02');

const n = gets();
maiorNumeroPar = null;
menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();
   
 if(numero % 2 === 0){
       if(maiorNumeroPar === null || numero > maiorNumeroPar){ // aqui criamos duas comparações, a primeira (maiorNumeroPar === null) será true apenas na primeira vez que o for rodar, então temos || que significa 'ou' com uma segunda possibilidade de condicional(numero > maiorNumeroPar) que poderá será aplicada nas outras vezes que o for rodar, onde se o numero atual que é par pois atendeu o primeiro if, for maior que o valor da variavel maiorNumeroPar o resultado será true e entrará no if
        maiorNumeroPar = numero;
        }
    }
    else{
        if(menorNumeroImpar === null  || numero < menorNumeroImpar){ // aqui criamos duas comparações, a primeira (menorNumeroImpar === 0) será true apenas na primeira vez que o for rodar, então temos || que significa 'ou' com uma segunda possibilidade de condicional(numero < menorNumeroImpar) que poderá será aplicada nas outras vezes que o for rodar, onde se o numero atual que é impar pois não atendeu o primeiro if, for menor que o valor da variavel menorNumeroImpar o resultado será true e entrará no if
            menorNumeroImpar = numero;
        }
    }
    

}

console.log('O maior número par é: ' + maiorNumeroPar);
console.log('O menor número impar é: ' + menorNumeroImpar);