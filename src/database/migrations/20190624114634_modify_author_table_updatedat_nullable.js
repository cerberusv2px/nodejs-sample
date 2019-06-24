/**
 * @param  {object} knex
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.up = function(knex) {
  return knex.schema.table(dbConst.table_name.TBL_AUTHORS, table => {
    table
      .timestamp(dbConst.default_column.UPDATED_AT)
      .nullable()
      .alter();
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.table(dbConst.table_name.TBL_AUTHORS, table => {
    table
      .timestamp(dbConst.default_column.UPDATED_AT)
      .notNull()
      .alter();
  });
};
