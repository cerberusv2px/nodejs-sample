// import { Router } from 'express';
import { authorController, bookController } from './api/controllers';
import swaggerSpec from './utils/swagger';
const Router = require('express');
// const authorController = require('./api/controllers');

let router = Router();

router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

/**
 * @swagger
 * definitions:
 *   App:
 *     title: App
 *     type: object
 *     properties:
 *       app:
 *         type: string
 *       apiVersion:
 *         type: string
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get API version
 *     description: App version
 *     produces:
 *       - application/json
 *     tags:
 *       - Base
 *     responses:
 *       200:
 *         description: Application and API version
 *         schema:
 *           title: Users
 *           type: object
 *           $ref: '#/definitions/App'
 */

router.get('/', function(req, res, next) {
  res.send('Welcome byaatchesssss');
});

router.use('/author', authorController);
router.use('/books', bookController);

module.exports = router;
