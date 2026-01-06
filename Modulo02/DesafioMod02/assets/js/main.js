const pokemonList = document.getElementById('pokemonList')// Esta variavel está armazenando a coleta da estrutura que indica que é uma lista(OL) através do ID
const loadMoreButton = document.getElementById('loadMoreButton')// Esta variavel está armazenando a coleta da estrutura que indica que é um botão através do ID
const modal = document.getElementById("myModal");

const maxRecords = 151 // é o maximo de pokemons ele irá solicitar a API, ou seja, ele fazá a requisição de no maximo 151 pokemons
const limit = 10 //é o limite de pokemons por pokemon
let offset = 0; // define de onde começar, inicia em 0 pois se refere ao array de pokemons vindo da PokeAPI
let allPokemons = []; // declarando o array que armazenará todos os pokemons


//Esta função irá retornar a estrutura HTML do elemento da lista. A variavel pokemon esta recebendo seu valor no chamamento dentro da função getPokemons, o método map está passando seus valores para semrem aplicados dentro da função, ou seja, a variavel pokemon esta armazenando a resposta da API
function convertPokemonToLi(pokemon){ 
    return `
        <li class="pokemon ${pokemon.type}" data-number="${pokemon.number}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                       ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}"> 
                </div>

            </li>
    `
}
// A variavel pokemon.type pega o tipo do pokemom dentro da resposta da API 
// A variavel pokemon.number pega o numero do pokemom dentro da resposta da API
// A variavel pokemon.name pega o nome do pokemom dentro da resposta da API
// então o método map vai fazer com que seja percorrido o array types, e criará um novo array que possui o elemento HTML e a variavel type, que vai receber o valor de cada elemento do array types conforme ele é percorrido. Fazendo com que seja impresso os tipos dos pokemons 
// A variavel pokemon.photo armazena o cominho para pegar a foto do pokemom dentro da resposta da API


function loadPokemonItens(offset, limit){ // Define a função loadPokemonItens que recebe via parametro os valores de offset e limit 
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {  // Aqui estamos chamando a função getPokemons do arquivo pokeApi que fará a requisção a API, quando recebermos a resposta da API ela será armazena na variavel pokemons 
    allPokemons.push(...pokemons); //adiciona todos os pokemons no arrau allPokemons
    const newHtml = pokemons.map(convertPokemonToLi).join('') // Aqui a varivel newHTML recebe a função convertPokemonToLi que executa uma estrutura HTML, contudo antes é executado um map na variavel pokemons que possui o array com a resposta da pokeAPI, então toda vez que ele passa por um elemento do array ele executa a função convertPokemonToLi, por fim é usado o método join que unirá a string HTML de cada pokemon
    pokemonList.innerHTML += newHtml // A variavel pokemonList recebe a estrutura HTML lá do arquivo index.html e graças ao innerHTML a estrutura HTML armazenado na variavel newHtml que contém toda a estrutura html apresentado acima
})
}

loadPokemonItens(offset, limit) // Define a função loadPokemonItens que recebe via parametro os valores offset e limit

loadMoreButton.addEventListener('click', () => { // adiciona um "ouvinte" ao botão loadMoreButton e executa o código quando o botão é clicado
    offset += limit // Avança o offset para proxima página, ou seja, toda vez que o botão é clicado offset que indica o começo e primeiro vale 0 e vai recebendo e somando o valor do limit(10) ao offset 
    const qtdRecordsWithNextPage = offset + limit // Serve para saber quantos pokemons teremos se a proxima pagina for carregada para evitar passar o maxRecords

    if(qtdRecordsWithNextPage >= maxRecords) { // Se o valor da variavel qtdRecordsWithNextPage atinge ou ultrapassa o valor do maxRecords, trata-se então da ultima pagina
        const newLimit = maxRecords - offset // calcula quantos pokemons restam para alcançar o valor maximo(maxRecords) e então newLimit recebe este valor 
        loadPokemonItens(offset, newLimit) // serve para não permitir que seja pedido mais que o permitido
        loadMoreButton.parentElement.removeChild(loadMoreButton) // remove o botão load more

    }else {
    loadPokemonItens(offset, limit) // se o limit de pokemons solicitados a API(151) não for atingida ele chama novamente o botão e permite mais requisições
    }
})


// Tudo abaixo está correlacionado a atividade pedida. 



// Está função está retornando a estrutura html do modal inicial
function convertPokemonToModal(pokemon){ 
    return `   
        <div class="modal-conteudo ${pokemon.type}"> 
            <div class="modal-superior">
                <h1>${pokemon.name}</h1>
                <span id="number">#${pokemon.number}</span>
                <br>
                <ol id="types">
                       ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol> 
            </div>
                <div class="container">   
                <img id="modalImg" src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            <div class="modal-inferior">

                <ol id="menu">
                    <li class="itemMenu"><button id="botaoAbout">About</button></li>
                    <li class="itemMenu"><button id="botaoStats"">Stats</button></li>
                    <li class="itemMenu"><button>Evolution</button></li>
                    <li class="itemMenu"><button>Moves</button></li>
                </ol>


            </div>
        </div>
    `
}

// Nesta função está a estrtura html de quando o botão about do modal é clicado 
function clickAbout(pokemon) {
    const conteudoAbout = `
        <table id="tabela01">
            <tbody>
                <tr>
                    <td class="T1-coluna01">Height</td>
                    <td class="T1-coluna02">${pokemon.height} cm</td>
                </tr>
                <tr>
                    <td class="T1-coluna01">Weight</td>
                    <td class="T1-coluna02">${pokemon.weight} kg</td>
                </tr>
                <tr>
                    <td class="T1-coluna01">Abilities</td>
                    <td id="elementAbilities" class="coluna02">${pokemon.abilities}</td>
                </tr>
            </tbody>
        </table>

        <h2 id="h2-parteInferior">Breeding</h2>

        <table id="tabela02">
            <tbody>
                <tr>
                    <td class="T2-coluna01">Gender</td>
                    <td class="T2-coluna02">${pokemon.gender}</td>
                </tr>
                <tr>
                    <td class="T2-coluna01">Egg Groups</td>
                    <td class="T2-coluna02">${pokemon.eggGroups}</td>
                </tr>
                <tr>
                    <td class="T2-coluna01">Egg Cycle</td>
                    <td class="T2-coluna02">${pokemon.passosParaChocar}</td>
                </tr>
            </tbody>
        </table>
    `;

    // Insere dentro da parte inferior do modal
    const modalInferior = document.querySelector(".modal-inferior"); // Pega a parte referente ao modal inferior que possui o seletor .modal-inferior e o armazena dentro da varivale modalInferior
    modalInferior.innerHTML += conteudoAbout; // insere o conteudo armazenado na variavel conteudoAbout dentro do conteudo armazenado pela variavel modalInferior 
}


// Nesta função está a estrtura html de quando o botão stats do modal é clicado e os calculos paro os valores dos status 
function clickStats(pokemon) {
  // Função auxiliar que calcula o valor da barra
  const calcularValor = (valor) => (valor <= 100 ? valor : valor / 2);

  // Função que define a cor da barra
  const calcularCor = (valor) => (valor < 50 ? "red" : "");

  const total = pokemon.hp + pokemon.attack + pokemon.defense + pokemon.specialAttack + pokemon.specialDefense + pokemon.speed;
  const valorTotal = calcularValor(total / 6); // média normalizada para exibição


  // Calcula os valores ajustados
  const valorHp = calcularValor(pokemon.hp);
  const valorAttack = calcularValor(pokemon.attack);
  const valorDefense = calcularValor(pokemon.defense);
  const valorSpecialAttack = calcularValor(pokemon.specialAttack);
  const valorSpecialDefense = calcularValor(pokemon.specialDefense);
  const valorSpeed = calcularValor(pokemon.speed);

  // Estrutura html de quando o botão stats é clicado 
  const conteudoStats = `
    <table id="tabela03">
      <tbody>
        <tr>
          <td>HP</td>
          <td>${pokemon.hp}</td>
          <td>
            <div class="progress-bar">
              <div class="progress ${pokemon.type}" style="width: ${valorHp}%; background-color: ${calcularCor(pokemon.hp)};"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Attack</td>
          <td>${pokemon.attack}</td>
          <td>
            <div class="progress-bar">
              <div class="progress  ${pokemon.type}" style="width: ${valorAttack}%; background-color: ${calcularCor(pokemon.attack)};"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>${pokemon.defense}</td>
          <td>
            <div class="progress-bar">
              <div class="progress  ${pokemon.type}" style="width: ${valorDefense}%; background-color: ${calcularCor(pokemon.defense)};"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Special Attack</td>
          <td>${pokemon.specialAttack}</td>
          <td>
            <div class="progress-bar">
              <div class="progress  ${pokemon.type}" style="width: ${valorSpecialAttack}%; background-color: ${calcularCor(pokemon.specialAttack)};"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Special Defense</td>
          <td>${pokemon.specialDefense}</td>
          <td>
            <div class="progress-bar">
              <div class="progress  ${pokemon.type}" style="width: ${valorSpecialDefense}%; background-color: ${calcularCor(pokemon.specialDefense)};"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>${pokemon.speed}</td>
          <td>
            <div class="progress-bar">
              <div class="progress  ${pokemon.type}" style="width: ${valorSpeed}%; background-color: ${calcularCor(pokemon.speed)};"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>${total}</strong></td>
          <td>
            <div class="progress-bar">
              <div class="progress ${pokemon.type}" style="width: ${valorTotal}%; background-color: ${calcularCor(total / 6)};"></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `;

  // Pega o container do modal e insere o conteúdo
  const modalInferior = document.querySelector(".modal-inferior");
  modalInferior.innerHTML += conteudoStats; // usa "=" para substituir, não acumular
}



pokemonList.addEventListener('click', (event) => {
const li = event.target.closest(".pokemon"); // pega o <li> clicado, ele pega o elemento exato que eu cliquei dentro do li e vai subindo até achar a classe pokemon que é pertencente ao li
    if (!li) return; // se o li for null, ou seja, a função acima não achou um resultado logo li não tem valor  

    const number = li.getAttribute("data-number"); // pega o número do Pokémon
    const pokemon = allPokemons.find(p => p.number == number); // encontra a instância correta, comparando o numero do pokemon que cliquei com todos os numeros de todos os pokemons 

    if (!pokemon) return; // se não encontrar, sai

    // Abre o modal com os dados do Pokémon clicado
    const modalInterno = convertPokemonToModal(pokemon);
    modal.innerHTML = modalInterno; // insere a função convertPOkemonToModal armazenado dentro do modalInterno dentro do modal lá no html 
    document.body.classList.add('modal-open'); // Impede a rolagem do fundo
    modal.style.display = "flex"; // torna o modal visivel 

    const botaoAbout = document.getElementById("botaoAbout"); // Usando o seletor por id ele coleta a estrutura do botaoAbout e o armazena na variavel botaoAbout 
    const botaoStats = document.getElementById("botaoStats"); // Usando o seletor por id ele coleta a estrutura do botaoStats e o armazena na variavel botaoStats

    botaoAbout.addEventListener("click", () => {
        clickAbout(pokemon);
    }); // Adiciona o evento de click que executa a função clickAbout quando o botão About é clicado 

    botaoStats.addEventListener("click", () => {
        clickStats(pokemon);
    }); // Adiciona o evento de click que executa a função clickStats quando o botão Stats é clicado 

});

// Fecha o modal ao clicar fora do conteúdo (no fundo)
modal.addEventListener('click', (event) => {
    if (event.target.id === 'myModal') {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Permite a rolagem do fundo novamente
    }
});
