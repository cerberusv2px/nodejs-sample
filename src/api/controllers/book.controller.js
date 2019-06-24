import { Router } from 'express';
import { bookService } from '../services';
import HttpStatus from 'http-status-codes';

let router = Router();

router.get('/', (req, res, next) => {
  bookService
    .getAllBooks()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  bookService
    .getBookById(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  bookService.createBook(req.body).then(data => res.status(HttpStatus.CREATED).json({ data }));
});

export default router;
