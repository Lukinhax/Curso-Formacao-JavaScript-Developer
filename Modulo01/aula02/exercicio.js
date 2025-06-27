/*
1) Faça um programa para calcular o valor de uma viagem.

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

/*
2) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.  

Média = (nota 1 + nota 2 + nota 3) /3;

Classificação: 
- Média menor que 5, reporvação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 9;
let nota2 = 9;
let nota3 = 9;
let media;

media = (nota1 + nota2 + nota3) / 3;

if(media >= 0 && media < 5){
    console.log('O aluno está reprovado');
}else if(media >= 5 && media < 7){
    console.log('O aluno está de recuperação');
}else if(media >= 7 && media <=10){
    console.log('O aluno passou de semestre');
}else{
    console.log('considerando o resultado do calculo de média, uma das notas foi inserida errada')
}

/*
3) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Fórmula do IMC: 
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição: 
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso; 
- Entre 30 e 40 Obeso; 
- Acima de 40 Obesidade Grave; 
*/

let peso = 50;
let altura = 1.70;
let imc = peso / (altura * altura);

if(imc >= 0 && imc < 18.5){
    console.log('Abaixo do peso');
}else if(imc >= 18.5 && imc < 25){
    console.log('Peso normal');
}else if(imc >= 25 && imc < 30){
    console.log('Acima do peso');
}else if(imc >= 30 && imc < 40){
    console.log('Obeso');
}else if(imc > 40){
    console.log('Obesidade Grave');
}else{
    console.log('Resultado inválido, verifique os dados de entrada');
}

/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento: 
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let etiqueta = 100;
let opc = 4;
let nParcelas= 3;
let resultado;

if(opc === 1){
    resultado = etiqueta - (etiqueta * 0.10);
    console.log('À vista no Débito, o valor a ser pago após o desconto é de: R$' + resultado.toFixed(2));
}else if(opc === 2){
    resultado = etiqueta - (etiqueta * 0.15);
    console.log('À vista no Dinheiro ou PIX, o valor a ser pago após o desconto é de: R$' + resultado.toFixed(2));
}else if(opc === 3 && nParcelas === 2){
    resultado = etiqueta / 2;
    console.log('Em duas vezes, o valor pago em cada parcela será de: R$' + resultado.toFixed(2));
}else if(opc === 4 && nParcelas > 2){
    resultado = (etiqueta + (etiqueta * 0.10)) / nParcelas;
    console.log('Em ' + nParcelas + ' vezes, ocorre um acrescimo de 10% tornando o valor de cada parcela igual a: R$' + resultado.toFixed(2));
}else{
    console.log('Opção inválida');
}