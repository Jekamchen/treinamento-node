const express = require("express");

const app = express();


/*app.get("/primeira-rota", (request, response) => {
    return response.send("primeira rota")
})*/




app.use(express.json())

const produtos = [];

/* 
    POST => Inserir um dado
    GET => Buscar um ou mais dados
    PUT => Alterar um dado
    DELETE => Apagar um dado
*/

/* 
    Body => Sempre que quiser enviar dados para a minha aplicação
    Params => /produtos/34798327498
    Query => /produto?id=324234
*/


app.post("/produtos", (request, response)=>{
    // Nome e preço

    const { name, price } = request.body;

    produtos.push({
        name,
        price
    })
    console.log(body);
})

app.listen(4002, () => console.log("Servidor rodando porta 4002"));