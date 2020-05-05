const expect = require('supertest');
const server = require('./server');

describe('test', () => {
  test('shoult return 200 OK', async () => {
    const response = await expect(server).get('/')
    expect(response.status).toBe(200)
  })
});