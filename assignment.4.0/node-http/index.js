const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {

    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('content-type', 'html');
    res.end('<html><body><h1>hello world</h1></body></html>');
})

server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}`)
})