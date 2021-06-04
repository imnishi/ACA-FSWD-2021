const express = require('express');
const bodyparser = require('body-parser');

const leaderrouter = express.Router();

leaderrouter.use(bodyparser.json());

leaderrouter.route('/')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req,res,next) => {
  res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
  res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
  res.end('Deleting all leaders');
});

leaderrouter.route('/:leaderid')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req,res,next) => {
  res.end('Will send details of the leader: ' + req.params.leaderid +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leaders/'+ req.params.leaderid);
})
.put((req, res, next) => {
  res.write('Updating the leader: ' + req.params.leaderid + '\n');
  res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
  res.end('Deleting leader: ' + req.params.leaderid);
});

module.exports = leaderrouter;