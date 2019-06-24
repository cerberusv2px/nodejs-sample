import Boom from 'boom';
import Book from '../models/book.model';

export function getAllBooks() {
  return Book.fetchAll();
}

export function getBookById(id) {
  return new Book({ id }).fetch().then(book => {
    if (!book) {
      throw Boom.notFound('Book not found');
    }

    return book;
  });
}

export function createBook(book) {
  return new Book({
    title: book.title,
    pages: book.pages,
    author_id: book.author_id
  }).save();
}
