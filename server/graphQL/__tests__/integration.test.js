const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mocks = require('../../express/mocks');

const db = require('../../express/models');
const typeDefs = require('../schemas');
const resolvers = require('../resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const GET_FIGHTS = gql`
query fights {
  fights {
    id
    winner
    method
  }
}
`;

const GET_FIGHT = gql`
query fights {
  fights(id: 1) {
    id
    winner
    method
  }
}
`;

const GET_EVENTS = gql`
query events {
  events {
    id
    name
    location
    fights {
      id
      winner
    }
  }
}
`;

const GET_EVENT = gql`
query events {
  events(id: 1) {
    id
    name
    location
    fights {
      id
      winner
    }
  }
}
`;

describe('Queries', () => {
  const { query } = createTestClient(server);
  let result;

  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await db.fights.bulkCreate([mocks.fightOne, mocks.fightTwo]);
    await db.events.create(mocks.event);
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
  test('Gets all events', async () => {
    result = await query({ query: GET_EVENTS });
    expect(result.data).toMatchSnapshot();
  });
  test('Gets correct event', async () => {
    result = await query({ query: GET_EVENT });
    expect(result.data.events[0].id).toBe(1);
    expect(result.data.events[0]).toHaveProperty('location', 'Barcelona');
  });
});
