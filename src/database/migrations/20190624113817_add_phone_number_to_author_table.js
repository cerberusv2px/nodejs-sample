/**
 * @param  {object} knex
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.up = function(knex) {
  return knex.schema.table(dbConst.table_name.TBL_AUTHORS, table => {
    table.string(dbConst.author_column.PHONE_NUMBER).notNull();
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.table(dbConst.table_name.TBL_AUTHORS, table => {
    table.dropColumn(dbConst.author_column.PHONE_NUMBER);
  });
};
