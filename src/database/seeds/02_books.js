/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  return knex(dbConst.table_name.TBL_BOOKS)
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex(dbConst.table_name.TBL_BOOKS).insert([
          {
            title: 'Defence of the Ancients',
            pages: 722,
            author_id: 3
          },
          {
            title: 'Baker Without Direction',
            pages: 432,
            author_id: 3
          },
          {
            title: 'Foe Of The World',
            pages: 1722,
            author_id: 2
          },
          {
            title: 'Cats Of Stone',
            pages: 222,
            author_id: 4
          },
          {
            title: 'Bandits Of Dusk',
            pages: 523,
            author_id: 5
          },
          {
            title: 'Children And Butchers',
            pages: 976,
            author_id: 4
          },
          {
            title: 'Hunted By Myself',
            pages: 666,
            author_id: 2
          }
        ])
      ]);
    });
};
