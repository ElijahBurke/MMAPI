const db = require('../models');
const mocks = require('../mocks');

let testFight;
let testEvent;
let testDivision;

describe('Models are associated correctly', () => {
  beforeAll(async () => {
    await db.sequelize.sync();
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

    fightOne.addFighter(1);
    fightOne.addFighter(2);
    eventOne.addFight(1);
    divisionOne.addFight(1);
    divisionOne.addFight(2);
    divisionOne.addFighter(1);
    divisionOne.addFighter(2);

    testFight = fightOne.toJSON();
    testEvent = eventOne.toJSON();
    testDivision = divisionOne.toJSON();
  });

  test('Coolest test', () => {
    expect(1).toBe(1);
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

  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
});
