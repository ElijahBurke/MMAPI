const request = require('supertest');
const db = require('../models');
const mocks = require('../mocks');
const app = require('../server');

let testFight;
let testEvent;
let testDivision;

describe('Models are associated correctly', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await db.events.create(mocks.event);
    await db.divisions.create(mocks.division);
    await db.fights.bulkCreate([mocks.fightOne, mocks.fightTwo]);
    await db.fighters.bulkCreate([mocks.fighterOne, mocks.fighterTwo]);

    const fightOne = await db.fights.findOne({
      where: { id: 1 },
      include: [db.fighters, db.events, db.divisions],
    });

    const eventOne = await db.events.findOne({
      where: { id: 1 },
      include: [db.fights, {
        model: db.fighters,
        as: 'potn',
      }],
    });

    const divisionOne = await db.divisions.findOne({
      where: { id: 1 },
      include: [{
        model: db.fighters,
        as: 'fighters',
      }],
    });

    await fightOne.addFighter(1);
    await fightOne.addFighter(2);
    await eventOne.addFight(1);
    await divisionOne.addFight(1);
    await divisionOne.addFight(2);
    await divisionOne.addFighter(1);
    await divisionOne.addFighter(2);

    testFight = await db.fights.findOne({
      where: { id: 1 },
      include: [db.fighters, db.events, db.divisions],
    });
    testEvent = await db.events.findOne({
      where: { id: 1 },
      include: [db.fights, {
        model: db.fighters,
        as: 'potn',
      }],
    });

    testDivision = await db.divisions.findOne({
      where: { id: 1 },
      include: [{
        model: db.fighters,
        as: 'fighters',
      }],
    });
  });

  test('fight has 2 fighters', () => {
    expect(testFight.fighters).toBeDefined();
    expect(testFight.fighters.length).toBe(2);
  });

  test('fight involves correct fighters', () => {
    expect(testFight.fighters[0].id).toBe(1);
    expect(testFight.fighters[1].id).toBe(2);
  });

  test('event contains correct fight', () => {
    expect(testEvent.fights).toBeDefined();
    expect(testEvent.fights[0].id).toBe(1);
  });

  test('fight belongs to correct division', () => {
    expect(testFight.divisionId).toBeDefined();
    expect(testFight.divisionId).toBe(1);
  });

  test('division contains correct fighters', () => {
    expect(testDivision.fighters.length).toBe(2);
  });

  // calling the test database
  describe('INTEGRATION - controller with models', () => {
    test('GET /fights - success', () => {
      expect.assertions(3);
      return request(app)
        .get('/fights')
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBeTruthy();
          expect(response.statusCode).toBe(200);
          expect(response.body.length).toBe(2);
        });
    });

    test('GET /fights/:id - success', () => {
      expect.assertions(1);
      return request(app)
        .get('/fights/1')
        .expect(200)
        .then((response) => {
          expect(response.body.id).toBe(1);
        });
    });

    test('GET /fights/:id - failure', () => {
      expect.assertions(2);
      return request(app)
        .get('/fights/3')
        .then((response) => {
          expect(response.status).toBe(404);
          expect(response.error.text).toBe('Error: data not found');
        });
    });
  });

  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
});
