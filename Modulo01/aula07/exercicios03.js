/*
    3) Faça um programa que calcule e imprima o sálario a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios
    O salário a ser tranferido é calculado da seguinte maneira:

    valor bruto do salário - percentual de imposto mediante a faixe salarial + adicional dos beneficios 

    Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

    Exemplo: 
        Entrada:
            2000
            250

        Saída:
            2050.00
*/

const {gets} = require('./funcoes-auxiliares03');

const valorSalarioBruto = gets();
const adicionalDosBeneficios = gets();

function calcularPercentual(valor, percentual){
    return valor * (percentual/100);
}

function percentualComBaseNoSalario(salarioBruto){
    if(salarioBruto >= 0.00 && salarioBruto <= 1100.00){
        return 5.00;
    }else if(salarioBruto > + 1100.01 && salarioBruto <= 2500.00){
        return 10.00
    }else{
        return 15.00
    }
}

const valorImposto = calcularPercentual(valorSalarioBruto, percentualComBaseNoSalario(valorSalarioBruto))
const salarioLiquido = valorSalarioBruto - valorImposto + adicionalDosBeneficios;

console.log(salarioLiquido);

console.log(percentualComBaseNoSalario(valorSalarioBruto));

console.log(calcularPercentual(valorSalarioBruto, 10));