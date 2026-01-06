const pokeApi = {} // é um objeto vazio que vai guardar as funções relacionadas a api

async function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon() // Aqui estamos criando uma instancia chamada pokemons baseada na classe Pokemon presente no arquivo pokemon-model.js, de forma clara estamos criando um exemplo real(instancia) baseado no modelo(classe) que definimos no arquivo pokemon-model.js. Por convenção nome de classes são com letras maiúsculas e isntancias com letras minusculas
    
    pokemon.number = pokeDetail.id // Aqui a variavel number da instancia pokemon está recebendo o seu valor correspondente que está presente na resposta da api dentro da seção order, lembrando que a resposta da API está armazenada na variavel pokeDetail.
    pokemon.name = pokeDetail.name // Aqui a variavel name da instancia pokemon está recebendo o seu valor correspondente que está presente na resposta da api dentro da seção name, lembrando que a resposta da API está armazenada na variavel pokeDetail.

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name) // a variavel types vai receber o nome do tipo do pokemon para isso ocorre o seguinte. Acessamos dentro da variavel pokeDetail(contém a resposta da API) a propriedade types nela executamos um map para percorrer o seu array e gerar um novo seguindo a regra colocada que é: A variavel typeSlot receberá cada itém do array types e acessará dentro de cada itém a chave type e dentro dela a chave name para então coletar o nome do tipo do pokemon, coletado o nome será criado o novo array graças ao map com nome dos tipos de pokemons que por fim será armazenado na variavel types.
    const [type] = types // aqui estamos desestruturando o array types, fazendo isso pegamos apenas o primeiro elemento do array e armazenamos na variavel type. Fazer isso é o mesmo que fazer isto aqui: const type = types[0]

    pokemon.types = types // Aqui a variavel types da instancia pokemon está recebendo o seu valor correspondente que está presente na variavel types que já fez toda a coleta da informação que queriamos dentro da respota da API
    pokemon.type = type// Aqui a variavel type da instancia pokemon está recebendo o seu valor correspondente que está presente na variavel type que aramzena apenas o primeiro valor da array amzenado dentro da variavel types que já fez toda a coleta da informação que queriamos dentro da respota da API
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default // Aqui a varaivel photo da instancia pokemon está recebendo o seu valor correspondente que está presente na resposta da api dentro das seções sprites > other > dream_world > front_default, lembrando que a resposta da API está armazenada na variavel pokeDetail.

    const height = pokeDetail.height / 10 // Aqui a variavel height está recebendo o seu valor correspondente que está presente na resposta da api porém divido por 10 
    pokemon.height = height.toFixed(2) // Aqui a variavel height da instancia pokemon está recebendo o seu valor da varivel height e estamos definindo 2 numeros após a virgula

    const weight = pokeDetail.weight / 10 // Aqui a variavel weight está recebendo o seu valor correspondente que está presente na resposta da api porém divido por 10 
    pokemon.weight = weight // Aqui a variavel weight da instancia pokemon está recebendo o seu valor da varivel weight

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name) // Aqui a variavel abilities está recebendo o seu valor correspondente que está presente na resposta da api porém usando o map ele percorre cada elemento do array pegando o nome de cada um deles e como já é caracteristico do map criando um novo array 
    pokemon.abilities = abilities // Aqui a variavel abilities da instancia pokemon está recebendo o seu valor da variavel abilities. 



        // 🟢 Nova requisição para o endpoint species:
    const speciesResponse = await fetch(pokeDetail.species.url) // É feita uma requisição a api, o await espera finalizar a requisição que retorna uma promise que é convertida em um objeto response que por fim é armazenada na variavel speciesResponse. A url para está requisição é pega dentro da resposta anterior da api que está armazenada empokeDetail. (pokeDetail.species.url)
    const speciesData = await speciesResponse.json() // aqui nós temos o corpo do objeto response sendo transformado de json para objeto javaScript o await é usado para esperar tendo em vista que esta transformação retorna uma promise.
    // 🔹 Gênero (gender_rate)
    const genderRate = speciesData.gender_rate // ele está pegando o genero dentro da resposta da api e armazenando dentro da variavel genderRate
    
    if (genderRate === -1) {
        pokemon.gender = "Sem gênero"
    } else {
        const femaleChance = (genderRate / 8) * 100 // genderRate está armazenando probabilidade de ser macho ou femea que vai de 0 a 8 então dividimos por 8 para conseguir a proporção de femeas depois multiplicamos por 100 para achar a %
        const maleChance = 100 - femaleChance // para achar a porcentagem para ser macho tire de 100 a porcentagem de ser femea 
        pokemon.gender = `♂️ ${maleChance}% / ♀️ ${femaleChance}%` // armazena os as probabilidades de macho ou femea 
    }

    // 🔹 Egg groups
    pokemon.eggGroups = speciesData.egg_groups.map(group => group.name) // ele está pegando o egg group dentro da resposta da api e armazenando dentro da variavel eggGroups

    // 🔹 Egg cycle (hatch_counter)
    pokemon.cicloDeIncubacao = speciesData.hatch_counter // ele está pegando o egg cucle dentro da resposta da api e armazenando dentro da variavel hatchCounter
    pokemon.passosParaChocar = (speciesData.hatch_counter + 1) * 255


        // 🔹 Status base (Base Stats)
    // Dentro da resposta da API (pokeDetail) existe uma seção chamada "stats"
    // Nela, cada posição do array representa um atributo do Pokémon (hp, attack, defense, etc.)
    // Usamos o método find() para procurar o objeto que corresponde a cada tipo de status
    // Dentro de cada objeto, a chave base_stat contém o valor numérico daquele atributo

    pokemon.hp = pokeDetail.stats.find((stat) => stat.stat.name === "hp").base_stat
    // Aqui estamos acessando o array stats, procurando o objeto onde o nome (stat.stat.name)
    // é igual a "hp" e pegando o valor da chave base_stat, que representa o valor de vida do Pokémon

    pokemon.attack = pokeDetail.stats.find((stat) => stat.stat.name === "attack").base_stat
    // Mesmo processo, mas agora pegando o valor de ataque do Pokémon

    pokemon.defense = pokeDetail.stats.find((stat) => stat.stat.name === "defense").base_stat
    // Pega o valor de defesa física do Pokémon

    pokemon.specialAttack = pokeDetail.stats.find((stat) => stat.stat.name === "special-attack").base_stat
    // Pega o valor de ataque especial do Pokémon

    pokemon.specialDefense = pokeDetail.stats.find((stat) => stat.stat.name === "special-defense").base_stat
    // Pega o valor de defesa especial do Pokémon

    pokemon.speed = pokeDetail.stats.find((stat) => stat.stat.name === "speed").base_stat
    // Pega o valor de velocidade do Pokémon


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

