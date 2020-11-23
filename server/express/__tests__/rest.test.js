const supertest = require('supertest');
const app = require('../server');

const mocks = require('./mocks.json');

const request = supertest(app);

describe('testing REST routes', () => {
  beforeAll(() => {
    jest.mock('../models', () => mocks);
  });
  test('get fights', async () => {
    const response = await request.get('/fights');
    console.log((response.statusCode));
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.statusCode).toBe(200);
  });

  test('Coolest test', () => {
    expect(1).toBe(1);
  });
});
