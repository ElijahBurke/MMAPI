const { getFights, getFightById } = require('../controllers/fight.controller');
const {
  fights, fighters, events, divisions,
} = require('../models');

jest.mock('../models', () => ({
  fights: () => { },
  fighters: () => { },
  events: () => { },
  divisions: () => { },
}));

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

describe('Fight controller unit test - SUCCESS', () => {
  const req = {};
  const res = {
    send: jest.fn(() => res).mockName('send'),
    status: jest.fn(() => res).mockName('status'),
  };

  describe('getFights - SUCCESS', () => {
    fights.findAll = jest.fn();
    fights.findAll.mockResolvedValue(fakeFights);

    test('fights.findAll should have been called correctly', async () => {
      expect.assertions(3);
      await getFights(req, res);
      expect(fights.findAll).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(fakeFights);
    });
  });

  describe('getFightsById', () => {
    req.params = {
      id: 1,
    };
    fights.findOne = jest.fn();
    fights.findOne.mockResolvedValue(fakeFights[0]);

    test('fights.findOne should have been called once', async () => {
      await getFightById(req, res);
      expect(fights.findOne).toHaveBeenCalled();
    });

    test('fights.findOne should have been called with where equal id', async () => {
      await getFightById(req, res);
      expect(fights.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
        include: [fighters, events, divisions],
      });
    });

    test('should call res.send with fights and set correct status', async () => {
      await getFightById(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(fakeFights[0]);
    });

    test('should respond correctly when Id not found', async () => {
      fights.findOne.mockResolvedValueOnce(null);
      await getFightById(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith('Error: data not found');
    });

    test('should send error message if query failed (id NaN)', async () => {
      fights.findOne.mockRejectedValueOnce(500);
      await getFightById(req, res);
      expect(res.send).toHaveBeenCalledWith('Error: Something went wrong');
    });
  });
});
