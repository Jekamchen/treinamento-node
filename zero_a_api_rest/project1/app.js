const express = require("express");
const { randomUUID } = require("crypto");
const fs = require("fs");

const app = express();

app.use(express.json())

let produtos = [];

fs.readFile("produtos.json", "utf-8", (err, data) =>{
    if(err){
        console.log(err);
    } else {
        produtos = JSON.parse(data);
    }
})

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

    const produto = {
        id: randomUUID(),
        name,
        price
    }

    produtos.push(produto)

    productFile()

    return response.json(produto)
})

app.get("/produtos", (request, response) =>{
    return response.json(produtos);
})

app.get("/produtos/:id", (request, response)=>{

    const { id } = request.params;

    const produto = produtos.find((produto) => produto.id === id);

    return response.json(produto)
    
})
    
app.put("/produtos/:id", (request, response) =>{
    const { id } = request.params;
    const { name, price } = request.body;

    const produtoIndex = produtos.findIndex((produto) => produto.id === id);

    produtos[produtoIndex] = {
        ...produtos[produtoIndex],
        name,
        price
    }

    productFile()

    return response.json({message:"Produto alterado com sucesso"});
})

app.delete("/produtos/:id", (request, response)=>{
    const { id } = request.params;
    const produtoIndex = produtos.findIndex((produto) => produto.id === id);
    produtos.splice(produtoIndex, 1);

    productFile()
    return response.json({ message: "Produto removido com sucesso"})
})

function productFile(){
    fs.writeFile("produtos.json", JSON.stringify(produtos), (err) => {
        if (err){
            console.log(err);
        } else {
            console.log("Produto Inserido")
        }
    })
}

app.listen(4002, () => console.log("Servidor rodando porta 4002"));