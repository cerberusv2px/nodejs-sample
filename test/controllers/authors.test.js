// import { expect } from 'chai';
// import request from 'supertest';
// import app from '../../src/';
// import bookshelf from '../../src/database';

const expect = require('chai').expect;
const request = require('supertest').request;
const app = require('../../src/');
const bookshelf = require('../../src/database/database');

describe('Author Controller test', () => {
  before(done => {
    bookshelf
      .knex('author')
      .truncate()
      .then(() => done());
  });

  it('should return list of author', done => {
    request(app)
      .get('/api/author')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.be.have.lengthOf(0);
        done();
      });
  });
});
