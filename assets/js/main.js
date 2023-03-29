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
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5
let offset = 0;



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `


        ).join('');
        pokemonList.innerHTML += newHtml
    });
}




loadPokemonItens(offset, limit)
loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})