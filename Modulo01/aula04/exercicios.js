/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso 
*/

class Carros{
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcGastoViagem(distanciaEmKM, valorCombustivel){
        return (distanciaEmKM * this.gastoMedioPorKM) * valorCombustivel;
    }
}

const uno = new Carros('Fiat', 'Prata', 1/12);
console.log(uno.calcGastoViagem(70, 5));

const palio = new Carros('Fiat', 'preto', 1/10);
console.log(palio.calcGastoViagem(70, 5));

// Apenas uma observação, ele quer o gasto médio do combustivel por km, logo o calculo é ( 1L / KMsporlitro ), no caso do uno 1L / 12Km ou o palio 1L / 10KM

/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / altura * altura));
    Instancie uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC
*/

class Pessoa{
    nome;
    peso; 
    altura; 

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso; 
        this.altura = altura;
    }

    calcIMC(){
        return this.peso / Math.pow(this.altura, 2)
    }

    classificarIMC(){
        const imc = this.calcIMC();

        if(imc < 18.5 ){
            return 'Abaixo do peso';
        }else if(imc >= 18.5 && imc < 25){
            return 'Peso normal';
        }else if(imc >= 25 && imc < 30){
            return 'Acima do peso';
        }else if(imc >= 30 && imc < 40){
            return 'Obeso';
        }else {
            return 'Obesidade Grave';
        }

    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcIMC());
console.log(jose.classificarIMC());
