/*
    1) Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 emprima "Reprovado"
    Caso a média seja >=5 e <7 imprima "Recuperação"
    Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada: 
            5.5
        Saída:
            Recuperação
*/
const {gets} = require('./funcoes-auxiliares01');

const media = gets();

if(media < 5 && media >= 0){
    console.log('reprovado');
}else if(media >= 5 && media < 7){
    console.log('Recuperação');
}else if(media >= 7){
    console.log(Aprovado);
}else{
    console.log('Número Inválido');
}