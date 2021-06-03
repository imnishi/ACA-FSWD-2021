const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log("Request to server " + req.url + " by method " + req.method);

    if(req.method == 'GET') {
        
        var fileurl;
        if(req.url == '/') fileurl = '/index.html';
        else fileurl = req.url;

        var filepath = path.resolve('./public' + fileurl);
        const fileext = path.extname(filepath);

        if(fileext == '.html') {

            fs.exists(filepath , (exists) => {
                if(!exists) {
                    res.statusCode = 404;
                    res.setHeader('content-typ', 'html');
                    res.end('<html><body><h1>ERRROR ' + res.statusCode + ' :</h1><p> file does not exist.</p></body></html>');
                }
                else {
                    res.statusCode = 200;
                    res.setHeader('content-typ', 'html');
                    fs.createReadStream(filepath).pipe(res);
                }
            });
        }
        else {
            res.statusCode = 404;
            res.setHeader('content-typ', 'html');
            res.end('<html><body><h1>ERRROR ' + res.statusCode + ' :</h1><p>' + fileext + 
            ' not html.</p></body></html>');
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('content-typ', 'html');
        res.end('<html><body><h1>ERRROR ' + res.statusCode + ' :</h1><p>' + req.method + 
        ' not defined to this server.</p></body></html>');

        return;
    }
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
});
