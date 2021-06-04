const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.all('/dishes',(req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
});

app.get('/dishes',(req, res, next) => {
    res.end('We will send you info of all the dishes.');
});

app.post('/dishes',(req, res, next) => {
    res.end('We will add the dish: ' + req.body.name + 'with description: ' + req.body.description + 'to our db.');
});

app.put('/dishes',(req, res, next) => {
    res.statusCode = 403;
    res.end('We do not handle PUT request in /dishes.');
});

app.delete('/dishes',(req, res, next) => {
    res.end('We will delete all the dishes from the db.');
});

app.get('/dishes/:dishid',(req, res, next) => {
    res.end('We will send you info of the dishes:' + req.params.dishid);
});

app.post('/dishes/:dishid',(req, res, next) => {
    res.statusCode = 403;
    res.end('We do not handle POST request in /dishes/:dishid.');
});

app.put('/dishes/:dishid',(req, res, next) => {
    res.end('We will update the dish: ' + req.body.name + 'with description: ' + req.body.description + 'in our db.');
});

app.delete('/dishes/:dishid',(req, res, next) => {
    res.end('We will delete the dish:' + req.params.dishid + ' from our db.');
});

app.use((req, res, next) => {

    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('content-type','html');
    res.end('<html><body><h1>request created using express</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`srever running at http://${hostname}:${port}`)
});