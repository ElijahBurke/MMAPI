const resolvers = require('../../graphQL/resolvers/query.resolver');
const { italics } = require('../../graphQL/schemas/query.schema');
const db = require('../models');

const mockFight1 = [
  {
    fight: {
      id: 1,
      winner: 'Destroyer',
    },
  },
];

const mockFight2 = [
  {
    fight: {
      id: 2,
      winner: 'Emperror',
    },
  },
];

const mockEvent = [
  {
    event: {
      id: 1,
      name: 'Cool_event',
      location: 'Moon',
    },
  },
];

const mockDivison = [
  {
    division: {
      id: 1,
      name: 'Galaxy_Division',
    },
  },
];

jest.mock('../models', () => ({
  sequelize: {
    models:
    {
      fights: () => {},
      events: () => {},
      divisions: () => {},
    },
  },
  Sequelize: {
    Op: () => {},
  },
}));

describe('get fight query', () => {
  it('should return correct winner', async () => {
    db.sequelize.models.fights.findAll = jest.fn();
    db.sequelize.models.fights.findAll.mockResolvedValue(mockFight1);
    const res = resolvers.fights({ id: 1 });
    expect(db.sequelize.models.fights.findAll).toHaveBeenCalledTimes(1);
    expect(res.lenght).toBe(1);
    expect(res[0].winner).toBe('Destroyer');
  });
});
