// import { Router } from 'express';
import { authorController, bookController } from './api/controllers';
const Router = require('express');
// const authorController = require('./api/controllers');

let router = Router();

router.get('/', function(req, res, next) {
  res.send('Welcome byaatchesssss');
});

router.use('/author', authorController);
router.use('/books', bookController);

module.exports = router;
