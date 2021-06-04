const express = require('express');
const bodyparser = require('body-parser');

const promotionrouter = express.Router();

promotionrouter.use(bodyparser.json());

promotionrouter.route('/')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req,res,next) => {
  res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
  res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
  res.end('Deleting all promotions');
});

promotionrouter.route('/:promotionid')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req,res,next) => {
  res.end('Will send details of the promotion: ' + req.params.promotionid +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promotionid);
})
.put((req, res, next) => {
  res.write('Updating the promotion: ' + req.params.promotionid + '\n');
  res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
  res.end('Deleting promotion: ' + req.params.promotionid);
});

module.exports = promotionrouter;