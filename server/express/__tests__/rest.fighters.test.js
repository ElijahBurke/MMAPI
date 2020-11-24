const { getFighters, getFighter } = require('../controllers/fighter.controller');
const { fights, fighters, events } = require('../models');

jest.mock('../models', () => ({
  fights: () => { },
  fighters: () => { },
  events: () => { },
}));

const fakeFighters = [
  {
    id: 1,
    name: 'Rafal',
    nickname: 'Banana',
  },
  {
    id: 2,
    name: 'Mandy',
    nickname: 'Destroyer',
  },
];

describe('Fighter controller unit test', () => {
  const req = {};
  const res = {
    send: jest.fn(() => res).mockName('send'),
    status: jest.fn(() => res).mockName('status'),
  };

  describe('getFighters - SUCCESS', () => {
    fighters.findAll = jest.fn();
    fighters.findAll.mockResolvedValue(fakeFighters);

    test('fighters.findAll should have been called correctly', async () => {
      expect.assertions(3);
      await getFighters(req, res);
      expect(fighters.findAll).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(fakeFighters);
    });
  });

  describe('getFighter', () => {
    req.params = {
      id: 1,
    };
    fighters.findOne = jest.fn();
    fighters.findOne.mockResolvedValue(fakeFighters[0]);

    test('fighters.findOne should have been called once', async () => {
      await getFighter(req, res);
      expect(fighters.findOne).toHaveBeenCalled();
    });

    test('fighters.findOne should have been called with where equal id', async () => {
      expect.assertions(1);
      await getFighter(req, res);
      expect(fighters.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
        include: [{
          model: fights,
          as: 'fights',
          include: fighters,
        }, {
          model: events,
          as: 'potn',
        }],
      });
    });

    test('should call res.send with fighter and set correct status', async () => {
      expect.assertions(2);
      await getFighter(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(fakeFighters[0]);
    });

    test('should respond correctly when Id not found', async () => {
      fighters.findOne.mockResolvedValueOnce(null);
      await getFighter(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith('Error: data not found');
    });

    test('should send error message if query failed (id NaN)', async () => {
      fighters.findOne.mockRejectedValueOnce(500);
      await getFighter(req, res);
      expect(res.send).toHaveBeenCalledWith('Error: Something went wrong');
    });
  });
});
