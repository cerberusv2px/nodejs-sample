import Boom from 'boom';
import Author from '../models/author.model';

export function getAllAuthor() {
  return Author.fetchAll();
}

export function getAuthorById(id) {
  return new Author({ id }).fetch().then(author => {
    if (!author) {
      throw Boom.notFound('Author not found');
    }

    return author;
  });
}

export function createAuthor(author) {
  return new Author({
    first_name: author.first_name,
    last_name: author.last_name,
    email: author.email,
    phone_number: author.phone_number,
    address: author.address
  }).save();
}

export function updateAuthor(id, author) {
  return new Author({ id }).save({
    first_name: author.first_name,
    last_name: author.last_name,
    email: author.email,
    phone_number: author.phone_number,
    address: author.address
  });
}

export function deleteAuthor(id) {
  return new Author({ id }).fetch().then(author => author.destroy());
}
