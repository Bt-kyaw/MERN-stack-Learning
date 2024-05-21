const http = require('http');

const server = http.createServer((req,res) => {
   res.setHeader('Content-type','text/html');
   res.write('<h1> HELLO WORLD </h1>')

   res.end();
})

server.listen('3000','localhost',() =>{
    console.log('server is listening on port 3000');
})