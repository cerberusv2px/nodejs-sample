/**
 * @param  {object} knex
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.up = function(knex) {
  return knex.schema.createTable(dbConst.table_name.TBL_AUTHORS, table => {
    table.increments(dbConst.author_column.ID);
    table.string(dbConst.author_column.FIRST_NAME).notNull();
    table.string(dbConst.author_column.LAST_NAME).notNull();
    table.string(dbConst.author_column.EMAIL).notNull();
    table.string(dbConst.author_column.ADDRESS).notNull();
    table
      .timestamp(dbConst.default_column.CREATED_AT)
      .notNull()
      .defaultTo(knex.raw('now()'));

    table.timestamp(dbConst.default_column.UPDATED_AT);
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable(dbConst.table_name.TBL_AUTHORS);
};
