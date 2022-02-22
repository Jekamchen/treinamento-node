const http = require('http');

http.createServer((request, response) => {

    if (request.url === '/produto'){
        response.end(JSON.stringify({
            message: 'produto'
        }));  
    }

    if (request.url === '/usuarios'){
        response.end(JSON.stringify({
            message: 'usuários'
        }));  
    }
    response.end(JSON.stringify({
        message: 'Qualquer outra rota'
    }));
    
}).listen(4001, () => console.log("servidor rodando na porta 4001"))