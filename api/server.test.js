const server = require('./server');
const request = require('supertest');

describe('server', () => {
  describe('get endpoints', () => {
    it('returns the right response when hitting /games', () => {
      return request(server)
        .get('/games')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
  describe('post endpoints', () => {
    it('returns the right response status when posting correct req /games', () => {
      return request(server)
        .post('/games')
        .send({ title: 'Captian Marvel', genre: 'action', releaseYear: 2019 })
        .expect('Content-Type', /json/)
        .expect(201);
    });
    it('returns the right response status when posting incorrect req /games', () => {
      return request(server)
        .post('/games')
        .send({ title: 'Captian Marvel', releaseYear: 2019 })
        .expect('Content-Type', /json/)
        .expect(422);
    });
  });
});
