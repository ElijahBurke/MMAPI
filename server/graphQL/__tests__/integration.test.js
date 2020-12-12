/* eslint-disable max-len */
const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server');
const mocks = require('../../express/mocks');
const { queries } = require('./__utils');

const {
  GET_FIGHT, GET_FIGHTS, GET_EVENT, GET_EVENTS, GET_FIGHTERS, GET_FIGHTER, GET_DIVISIONS, GET_DIVISION,
} = queries;

const db = require('../../express/models');
const typeDefs = require('../schemas');
const resolvers = require('../resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

describe.only('Queries', () => {
  const { query } = createTestClient(server);
  let result;

  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await db.fights.bulkCreate([mocks.fightOne, mocks.fightTwo]);
    await db.fighters.bulkCreate([mocks.fighterOne, mocks.fighterTwo]);
    await db.events.create(mocks.event);
    await db.divisions.bulkCreate([mocks.divisionOne, mocks.divisionTwo]);
  });

  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });

  test('Gets all fights', async () => {
    result = await query({ query: GET_FIGHTS });
    expect(result.data).toMatchSnapshot();
  });
  test('Gets correct fight', async () => {
    result = await query({ query: GET_FIGHT });
    expect(result.data.fights[0].id).toBe(1);
    expect(result.data.fights[0]).toHaveProperty('winner', 'red');
  });
  test('Gets all fighters', async () => {
    result = await query({ query: GET_FIGHTERS });
    expect(result.data).toMatchSnapshot();
  });
  test('Gets correct fighter', async () => {
    result = await query({ query: GET_FIGHTER });
    expect(result.data.fighters[0].id).toBe(1);
    expect(result.data.fighters[0]).toHaveProperty('nickname', 'Banana');
  });
  test('Gets all events', async () => {
    result = await query({ query: GET_EVENTS });
    expect(result.data).toMatchSnapshot();
  });
  test('Gets correct event', async () => {
    result = await query({ query: GET_EVENT });
    expect(result.data.events[0].id).toBe(1);
    expect(result.data.events[0]).toHaveProperty('location', 'Barcelona');
  });
  test('Gets all divisions', async () => {
    result = await query({ query: GET_DIVISIONS });
    expect(result.data).toMatchSnapshot();
  });
  test('Gets correct division', async () => {
    result = await query({ query: GET_DIVISION });
    expect(result.data.divisions[0].id).toBe(1);
    expect(result.data.divisions[0]).toHaveProperty('division_name', 'heavy weights');
  });
});
