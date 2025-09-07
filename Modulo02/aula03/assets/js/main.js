const pokemonList = document.getElementById('pokemonList')// Esta variavel está armazenando a coleta da estrutura que indica que é uma lista(OL) através do ID
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

//Esta função irá retornar a estrutura HTML do elemento da lista. A variavel pokemon esta recebendo seu valor no chamamento dentro da função getPokemons, o método map está passando seus valores para semrem aplicados dentro da função
function convertPokemonToLi(pokemon){ 
    return `
        <li class="pokemon ${pokemon.type}">
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
// caminho para pegar a url da imagem dentro da resposta da api que está armazenado dentro da variavel pokemon que foi recebida via parametro dentro da função getPokemons


function loadPokemonItens(offset, limit){
pokeApi.getPokemons(offset, limit).then((pokemons = []) => {  // Aqui estamos chamando a função que fará a requisção a API, quando recebermos a resposta da API ela será armazena na variavel pokemons 
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
})
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNextPage = offset + limit

    if(qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, limit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else {
    loadPokemonItens(offset, limit)
    }
})