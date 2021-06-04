const express = require('express');
const bodyparser = require('body-parser');
const http = require('http');
const dishrouter = require('./routes/dishrouter');
const promotionrouter = require('./routes/promotionrouter');
const leaderrouter = require('./routes/leaderrouter');


const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(bodyparser.json());

app.use('/dishes', dishrouter);
app.use('/promotions', promotionrouter);
app.use('/leaders', leaderrouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});