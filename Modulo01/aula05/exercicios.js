let numero = 5;

for (let i = 0; i <= 10; i++) {
   console.log(numero + ' X ' + i + ' = ' + numero * i );
}

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        console.log('O número ' + numeros[i] + ' é par');
    }
    
}