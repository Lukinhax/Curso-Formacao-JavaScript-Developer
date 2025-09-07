const pokeApi = {} // é um objeto vazio que vai guardar as funções relacionadas a api

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon() // Aqui estamos criando uma instancia chamada pokemons baseada na classe Pokemon presente no arquivo pokemon-model.js, de forma clara estamos criando um exemplo real(instancia) baseado no modelo(classe) que definimos no arquivo pokemon-model.js. Por convenção nome de classes são com letras maiúsculas e isntancias com letras minusculas
    pokemon.number = pokeDetail.id // Aqui a variavel number da instancia pokemon está recebendo o seu valor correspondente que está presente na resposta da api dentro da seção order, lembrando que a resposta da API está armazenada na variavel pokeDetail.
    pokemon.name = pokeDetail.name // Aqui a variavel name da instancia pokemon está recebendo o seu valor correspondente que está presente na resposta da api dentro da seção name, lembrando que a resposta da API está armazenada na variavel pokeDetail.

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name) // a variavel types vai receber o nome do tipo do pokemon para isso ocorre o seguinte. Acessamos dentro da variavel pokeDetail(contém a resposta da API) a propriedade types nela executamos um map para percorrer o seu array e gerar um novo seguindo a regra colocada que é: A variavel typeSlot receberá cada itém do array types e acessará dentro de cada itém a chave type e dentro dela a chave name para então coletar o nome do tipo do pokemon, coletado o nome será criado o novo array graças ao map com nome dos tipos de pokemons que por fim será armazenado na variavel types.
    const [type] = types // aqui estamos desestruturando o array types, fazendo isso pegamos apenas o primeiro elemento do array e armazenamos na variavel type. Fazer isso é o mesmo que fazer isto aqui: const type = types[0]

    pokemon.types = types // Aqui a variavel types da instancia pokemon está recebendo o seu valor correspondente que está presente na variavel types que já fez toda a coleta da informação que queriamos dentro da respota da API
    pokemon.type = type// Aqui a variavel type da instancia pokemon está recebendo o seu valor correspondente que está presente na variavel type que aramzena apenas o primeiro valor da array amzenado dentro da variavel types que já fez toda a coleta da informação que queriamos dentro da respota da API
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default // Aqui a varaivel photo da instancia pokemon está recebendo o seu valor correspondente que está presente na resposta da api dentro das seções sprites > other > dream_world > front_default, lembrando que a resposta da API está armazenada na variavel pokeDetail.

    return pokemon // retorna a instancia com os valores dentro da variaveis  
}

pokeApi.getPokemonDetail = (pokemon) => { // A função é chamada dentro da função getPokemons, junto ao chamamento da função getPokemonDetail é aplicado o metodo map que percorre o array armazenado dentro de pokemons, que por fim passar cada elemento deste array para a avriavel pokemon para que então possa ser utilizado dentro da funçao getPokemonDetail
    return fetch(pokemon.url).then((response) => response.json()) // aqui ele faz uma requisição a api do pokemon especificado pegando seus detalhes e já transformando a respota da api de json para objeto JavaScript 
            .then(convertPokeApiDetailToPokemon) // Aqui ele está chamando a função convertPokeApiToPokemon para que possa passar a resposta da API já tranformada em objeto JavaScript para o parametro pokeDetail da função convertPokeApiToPokemon, onde por fim ele será utilizada 
}


pokeApi.getPokemons = function(offset = 0, limit = 10){ //  Estamos criando a função getpokemons e guardando ela dentro do objeto pokeapi
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url) //O fetch é uma função que faz a requisição HTTP e retorna uma Promise, ou seja, indica que a resposta pode demorar (assincrona) e será tratada no futuro. Recebe por parâmetro a URL da API que fornecerá os dados.
        .then((response) => response.json()) // recebe a resposta da api em json, onde o "response.json" vai retornar uma promise que quando resolvida retorna a resposta da api em formato de objeto JavaScript
        .then((jsonBody) => jsonBody.results) // ele está recebendo a resposta da api já tranformada em objeto JavaScript e dentro da resposta ele está pegando o setor results que contém as informações dos pokemons 
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // pokemons agora armazena um array com os detalhes de todos os pokemons. Em seguida aplicamos nele o método mapa para percorrer o array armazenado em pokemons aplicando nele a função getPokemonDetaile, para criar um novo array 
        .then((detailRequests) => Promise.all(detailRequests)) // detailRequest armazena o array de promises dos detalhes dos pokemons, então ela espera todas as promises terminarem ele retorna um array com o valores resolvidos  
        .then((pokemonDetails) => pokemonDetails) // pokemonDetails armazena então o array com todos os detalhes de cada pokemon 
    }