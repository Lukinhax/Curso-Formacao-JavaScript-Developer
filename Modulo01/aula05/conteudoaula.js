const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos); // saida: ['João', 'Vitor', 'Marina'];
console.log(alunos[1]); // saida: Vitor

const numeros = ['1', '2', '3'];

console.log(numeros);
console.log(numeros.pop());
console.log(numeros.shift());
console.log(numeros);

const notas = []; // cria um array vazio 

notas.push(10); // adiciona um valor ao array notas
notas.push(10); // adiciona um valor ao array notas
notas.push(10); // adiciona um valor ao array notas

let soma = 0; // declara a variavel aqui por conta do escopo de bloco

for (let i = 0; i < notas.length; i++) { //percorre todo o array
    soma += notas[i]; // mesma coisa que soma = soma + notas[i]
}

const media = soma / notas.length; // calcula a media divindo a o valor da variavel soma pelo quantidade de números 
console.log('A media é ' + media); // imprimi a média na tela 


const nome = 'Lucas Magnani Melo';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
 //explicação deste código no resumo (modulo 1/ aula 5 tópico 5 - estrutura de repetição for)
