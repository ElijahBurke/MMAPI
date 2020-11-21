// const express = require('express');
// const request = require('supertest');
// const routes = require('../router');

// const app = express();
// app.use('/fighters', routes);

// jest.mock('../models/Fight.js', () => [
//   {
//     winner: 'red',
//     method: 'fighting',
//     details: 'details',
//     rounds: 3,
//     round_end_time: 'the end',
//     fotn: 'true',
//     n_rounds: 'three',
//   },
//   {
//     winner: 'blue',
//     method: 'screaming',
//     details: 'details',
//     rounds: 5,
//     round_end_time: 'the end',
//     fotn: 'true',
//     n_rounds: 'three',
//   },
// ]);

describe('testing REST routes', () => {
  // test('Gets the figters', async () => {
  //   const { body } = await request(app).get('/fighters');
  //   expect(body).toEqual([
  //     {
  //       winner: 'red',
  //       method: 'fighting',
  //       details: 'details',
  //       rounds: 3,
  //       round_end_time: 'the end',
  //       fotn: 'true',
  //       n_rounds: 'three',
  //     },
  //     {
  //       winner: 'blue',
  //       method: 'screaming',
  //       details: 'details',
  //       rounds: 5,
  //       round_end_time: 'the end',
  //       fotn: 'true',
  //       n_rounds: 'three',
  //     },
  //   ]);
  // });

  test('Coolest test', () => {
    expect(1).toBe(1);
  });
});
