//fazendo uma requisição http via javaScript
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
//o que o fetch retornar?
// Faz uma requisição HTTP para o URL especificado
//faz a solicitação HTTP para o URL especificado e retorna uma promessa que representa a resposta.
//>> entendimento:  faço uma requisição >> fetch(url) se a resposta for bem sucessida >> .then
//..continua eu retorno >> (function (Response) {console.log(Response);});
// arrow function => uma função simplificada ( função especial )
//convertPokemonToHtml >> vai pegar uma lista de pokemons
function convertPokemonToHtml(pokemon) {
    return `<li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="${pokemon.name}">
    </div>

</li>`
}
//vai add mais uma lista
const pokemonList = document.getElementById('pokemonList')
fetch(url)
    //1° passo 
    .then(  (response) => response.json())
    //2° passo
    .then( (jsonBody) => jsonBody.results)
    .then((pokemons)=>{
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            //vai add uma lista
            pokemonList.innerHTML += convertPokemonToHtml(pokemon)
            
        }
    })
    //respota com erro
    .catch( (error) => console.log(error))
    //vai ser executado independentemente se a respota com com sucesso ou erro
    // .finally( () => 
    //     console.log('Requisição concluida!!')
    //
