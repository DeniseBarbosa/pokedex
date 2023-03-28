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
fetch(url)
    //1° passo 
    .then(  (response) => response.json())
    //2° passo
    .then( (jsonBody) =>console.log(jsonBody))
    //respota com erro
    .catch( (error) => console.log(error))
    //vai ser executado independentemente se a respota com com sucesso ou erro
    // .finally( () => 
    //     console.log('Requisição concluida!!')
    //
