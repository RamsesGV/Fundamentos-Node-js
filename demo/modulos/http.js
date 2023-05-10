const http = require('http')

http.createServer((req,res) => { 
console.log('nueva peticion')
console.log(req.url)

res.writeHead(201,{'Content-type': 'text/plain'})

//escribir respuesta al usuario
res.write('Hola, ya se usar HTTP de nodeJS')

res.end()
}).listen(3000, () => { 
    console.log('server raised on port 3001')
})