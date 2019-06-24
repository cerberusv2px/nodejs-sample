const tableNames = {
  TBL_AUTHORS: 'authors',
  TBL_BOOKS: 'books'
};

const defaultCols = {
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at'
};

const authorCols = {
  ID: 'id',
  FIRST_NAME: 'first_name',
  LAST_NAME: 'last_name',
  ADDRESS: 'address',
  EMAIL: 'email',
  PHONE_NUMBER: 'phone_number'
};

const bookCols = {
  TITLE: 'title',
  PAGES: 'pages',
  AUTHOR_ID: 'author_id'
};

module.exports = {
  table_name: tableNames,
  default_column: defaultCols,
  author_column: authorCols,
  book_column: bookCols
};
