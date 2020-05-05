const request = require('supertest')
// const { env } = require('../config/database');
const server = require('./user')

describe('server', () => {
  // it('the db env is using testing', () => {
  //   expect(env).toBe('testing');
  // });
  it('should return 200 OK', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end(done);
  });
  it('returns the right response body', (done) => {
    request(server)
      .get('/')
      .expect({ api: 'family secret' })
      .end(done);
  });
});