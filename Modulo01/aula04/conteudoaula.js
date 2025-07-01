// EXEMPLO 1

const pessoa = {
	nome: 'Vitor J Gerra',
	idade: 25
}

vitor.altura = 1.69;

console.log(pessoa); // saída { nome: 'Vitor J Gerra', idade: 25, altura: 1.69 }

delete pessoa.name;

console.log(pessoa); // saída { idade: 25, altura: 1.69 }

// EXEMPLO 2

const individuo = {
	nome: 'Vitor J Gerra',
	idade: 25,
	
	descrever(){
		console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}')
	}
}

individuo.decrever(); // saída: Meu nome é Vitor J Gerra e minha idade é 25

individuo.descrever = function(){
	console.log('Meu nome é ${this.nome}');
}// aqui nós sobrescrevemos o valor do método individuo para está função que executa um console log

individuo();// saída: Meu nome é Vitor J Gerra

// EXEMPLO 3

class Pessoa {
	nome; 
	idade;
	
	descrever(){
		console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
	}
}

const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

vitor.descreve(); //Meu nome é Vitor J Guerra e minha idade é 25
renan.descreve(); //Meu nome é Renan J Paula e minha idade é 30

// EXEMPLO 4

class Pessoa {
	nome; 
	idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade 
        this.anoDeNascimento = 2025 - idade;
    }
	
	descrever(){
		console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
	}
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

console.log(vitor);


//Exemplo 4 vou usar a classe pessoa acima 

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);
