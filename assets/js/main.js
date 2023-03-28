//fazendo uma requisição http via javaScript

//o que o fetch retornar?
// Faz uma requisição HTTP para o URL especificado
//faz a solicitação HTTP para o URL especificado e retorna uma promessa que representa a resposta.
//>> entendimento:  faço uma requisição >> fetch(url) se a resposta for bem sucessida >> .then
//..continua eu retorno >> (function (Response) {console.log(Response);});
// arrow function => uma função simplificada ( função especial )
//convertPokemonToHtml >> vai pegar uma lista de pokemons

/**
 * Função que converte um objeto pokemon em HTML
 *
 * @param {Object} pokemon - objeto com informações do pokemon
 * @returns {String} - string com o HTML do pokemon
 */
function convertPokemonTypesToList(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
function convertPokemonToHtml(pokemon) {
    // Utiliza string template para retornar o HTML do pokemon
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToList(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `;
}

// Obtém a referência do elemento com id "pokemonList"
const pokemonList = document.getElementById('pokemonList');

// Chama o método getPokemons da variável pokeApi e atribui o resultado à variável pokemons
pokeApi.getPokemons().then((pokemons = []) => {
    // Utiliza o operador += para adicionar à lista de pokemons os pokemons obtidos da API
    // Utiliza o método map para aplicar a função convertPokemonToHtml a cada pokemon e gerar uma lista de strings HTML
    // Utiliza o método join para concatenar todas as strings HTML em uma só
    // O resultado é adicionado ao HTML da lista de pokemons
    const newHtml = pokemons.map(convertPokemonToHtml).join('');
    pokemonList.innerHTML = newHtml
});

