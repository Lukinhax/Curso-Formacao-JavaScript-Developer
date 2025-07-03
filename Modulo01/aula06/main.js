// exemplo 1
const arquivoFuncoes = require('./funcoes-auxiliares.js');

console.log(arquivoFuncoes.gets());

// exemplo 2

const {gets, print, getss } = require('./funcoes-auxiliares.js');

console.log(gets());


/*
    Uma sala contem 5 alunos e para cada aluno doi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/
const quantidadeNúmeros = getss();

let maiorValor = 0;

for (let i = 0; i < quantidadeNúmeros; i++) {
    const numeroSorteado = getss();
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

console.log(maiorValor);


