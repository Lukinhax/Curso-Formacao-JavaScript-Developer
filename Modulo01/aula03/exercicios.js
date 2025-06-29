/*
1) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Fórmula do IMC: 
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição: 
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso; 
- Entre 30 e 40 Obeso; 
- Acima de 40 Obesidade Grave; 

OBS: Utilize funções
*/

function calcIMC(peso, altura){
    return peso / Math.pow(altura, 2); 
}

function classificarIMC(imc){

        if(imc >= 0 && imc < 18.5){
        return 'Abaixo do peso';
        }else if(imc >= 18.5 && imc < 25){
        return 'Peso normal';
        }else if(imc >= 25 && imc < 30){
        return 'Acima do peso';
        }else if(imc >= 30 && imc < 40){
        return 'Obeso';
        }else if(imc > 40){
        return 'Obesidade Grave';
        }else{
        return 'Resultado inválido, verifique os dados de entrada';
        }

}

function main(){

let peso = 50;
let altura = 1.70;
const imc = calcIMC(peso, altura);
console.log(classificarIMC(imc));

}

main();

/*
2) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento: 
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(etiqueta, desconto){
    return etiqueta - (etiqueta * desconto);
}

function aplicarJuros(etiqueta, acrescimo){
    return etiqueta + (etiqueta * acrescimo);
}

function escolherOPC(opc, etiqueta){
    if(opc === 1){
        let resultado = aplicarDesconto(etiqueta, 0.1);
        console.log('À vista no Débito, o valor a ser pago após o desconto é de: R$' + resultado.toFixed(2));
    }else if(opc === 2){
        let resultado = aplicarDesconto(etiqueta, 0.15);
        console.log('À vista no Dinheiro ou PIX, o valor a ser pago após o desconto é de: R$' + resultado.toFixed(2));
    }else if(opc === 3){
        let resultado = etiqueta;
        console.log('Em duas vezes, o valor pago será de: R$' + resultado.toFixed(2));
    }else if(opc === 4){
        let resultado = aplicarJuros(etiqueta, 0.1);
        console.log('Em mais de 2 vezes, ocorre um acrescimo de 10% tornando o valor a ser pago de: R$' + resultado.toFixed(2));
    }else{
        console.log('Opção inválida');
    }
}


escolherOPC(4, 100);




/*
3) Criar uma função que escreve um nome e outra função que usa a primeira para escrever o nome e ainda verifica se o individuo é maior ou menor de idade 
*/

function escreverMeuNome(nome){
    return 'Meu nome é ' + nome;
}

console.log(escreverMeuNome('Lucas'));

function verificaIdade(idade){
    if(idade >= 0 && idade < 18){
        console.log(escreverMeuNome('Lucas') + ' é menor de idade !');
    }else if(idade >= 18){
        console.log(escreverMeuNome('Lucas') + ' é maior de idade !');
    }else{
        console.log(escreverMeuNome('Lucas') + ', você inseriu uma Idade inválida');
    }

}

verificaIdade(18);
