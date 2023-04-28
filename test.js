const request = require('supertest');
const {expect} = require('expect');

const app = require('./app');

describe('Testing sample API', () => {
  it('respond with valid HTTP status code', async () => { // add `async` keyword here
    const response = await request(app)
      .get('/test_url')
      .send();

    expect(response.status).toBe(200);
  });
});