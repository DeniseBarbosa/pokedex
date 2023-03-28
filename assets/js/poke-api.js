//default se não passar nada retornar esse valores offset = 0, limit = 10
const pokeApi = {}
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        //1° passo 
        .then((response) => response.json())
        //2° passo
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.log(error))
}