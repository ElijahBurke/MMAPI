const db = require('../../express/models');
const {
  fighters, fights, divisions, events,
} = require('../resolvers/query.resolver');

const fakeFights = [
  {
    id: 1,
    winner: 'blue',
    method: 'screaming',
    details: 'details',
    rounds: 5,
    round_end_time: 'the end',
    fotn: true,
    n_rounds: 'three',
  },
  {
    id: 2,
    winner: 'red',
    method: 'crying',
    details: 'details',
    rounds: 5,
    round_end_time: 'the end',
    fotn: true,
    n_rounds: 'three',
  },
];

const fakeDivision = {
  id: 1,
  division_name: 'heavy weights',
  min_weight: 200,
  max_weight: 300,
};

jest.mock('../../express/models', () => ({
  fights: () => { },
  fighters: () => { },
  events: () => { },
  divisions: () => { },
}));

describe('get fight query', () => {
  db.fights.findAll = jest.fn();
  db.fights.findAll.mockResolvedValue(fakeFights[0]);

  test('should return correct fighter', async () => {
    expect.assertions(2);
    const result = await fights({ id: 1 });
    expect(db.fights.findAll).toHaveBeenCalledTimes(1);
    expect(result.id).toBe(1);
  });
});

describe('get division query', () => {
  db.divisions.findAll = jest.fn();
  db.divisions.findAll.mockResolvedValue(fakeDivision);

  test('should return correct division', async () => {
    expect.assertions(2);
    const result = await divisions({ id: 1 });
    expect(db.divisions.findAll).toHaveBeenCalledTimes(1);
    expect(result.division_name).toBe('heavy weights');
  });
});
