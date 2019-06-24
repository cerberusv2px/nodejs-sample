// import { Router } from 'express';
import { authorController } from './api/controllers';
const Router = require('express');
// const authorController = require('./api/controllers');

let router = Router();

router.get('/', function(req, res, next) {
  res.send('Welcome byaatchesssss');
});

router.use('/author', authorController);

module.exports = router;
