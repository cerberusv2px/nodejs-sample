/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */

const dbConst = require('../constants');

exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  return knex(dbConst.table_name.TBL_AUTHORS)
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex(dbConst.table_name.TBL_AUTHORS).insert([
          {
            id: 2,
            first_name: 'Legion',
            last_name: 'Commander',
            address: 'Radiant',
            phone_number: '9876454545',
            email: 'legion@dota.com'
          },
          {
            id: 3,
            first_name: 'Anti',
            last_name: 'Mage',
            address: 'Dire',
            phone_number: '9876454541',
            email: 'am@dota.com'
          },
          {
            id: 4,
            first_name: 'In',
            last_name: 'Voker',
            address: 'Dire',
            phone_number: '9876454545',
            email: 'joker@dota.com'
          },
          {
            id: 5,
            first_name: 'Dragon',
            last_name: 'Knight',
            address: 'Radiant',
            phone_number: '9876454545',
            email: 'dk@dota.com'
          }
        ])
      ]);
    });
};
