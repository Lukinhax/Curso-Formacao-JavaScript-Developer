const entradas = [2000, 250];
let i = 0

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

module.exports = { gets };