/**
 * @param  {object} knex
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.up = function(knex) {
  return knex.schema.createTable(dbConst.table_name.TBL_BOOKS, table => {
    table.increments();
    table.string(dbConst.book_column.TITLE).notNull();
    table.integer(dbConst.book_column.PAGES).notNull();
    table.integer(dbConst.book_column.AUTHOR_ID).notNull();
    table.foreign(dbConst.book_column.AUTHOR_ID).references(`${dbConst.table_name.TBL_AUTHORS}.id`);
    table
      .timestamp(dbConst.default_column.CREATED_AT)
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp(dbConst.default_column.UPDATED_AT).nullable();
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable(dbConst.table_name.TBL_BOOKS);
};
