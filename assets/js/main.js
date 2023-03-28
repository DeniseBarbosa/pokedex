//fazendo uma requisição http via javaScript
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
//o que o fetch retornar?
// Faz uma requisição HTTP para o URL especificado
//faz a solicitação HTTP para o URL especificado e retorna uma promessa que representa a resposta.
fetch(url).then(function (Response) {
    console.log(Response);
});

const x = 10 + 10;
console.log(x);