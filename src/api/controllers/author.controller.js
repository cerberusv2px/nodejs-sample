import { Router } from 'express';
import { authorService } from '../services';
import HttpStatus from 'http-status-codes';
import { findAuthor, authorValidator } from '../validators/author.validator';

let router = Router();

router.get('/', (req, res, next) => {
  authorService
    .getAllAuthor()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  authorService
    .getAuthorById(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.post('/', authorValidator, (req, res, next) => {
  authorService.createAuthor(req.body).then(data => res.status(HttpStatus.CREATED).json({ data }));
});

router.put('/:id', findAuthor, authorValidator, (req, res, next) => {
  authorService
    .updateAuthor(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.delete('/:id', findAuthor, (req, res, next) => {
  authorService
    .deleteAuthor(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
});

export default router;
