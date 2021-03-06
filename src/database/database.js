import knexJs from 'knex';
import knexConfig from './knexfile';
import bookshelfJs from 'bookshelf';

const knex = knexJs(knexConfig);
const bookshelf = bookshelfJs(knex);

bookshelf.plugin(['virtuals', 'pagination', 'visibility']);

export default bookshelf;
