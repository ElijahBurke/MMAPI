const models = require('../models');

const getEvents = async (req, res) => {
  try {
    const result = await models.events.findAll({});
    if (result) {
      res.status(200);
      res.send(result);
    } else {
      res.status(404);
      res.send('Error: data not found');
    }
  } catch (err) {
    res.status(500);
    res.send('Something went wrong');
    console.error(err);
  }
};

const getEventsById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await models.events.findOne({
      where: { id },
      include: [models.fights, {
        model: models.fighters,
        as: 'potn',
      }],
    });
    if (result) {
      res.status(200);
      res.send(result);
    } else {
      res.status(404);
      res.send('Error: data not found');
    }
  } catch (err) {
    res.status(500);
    res.send('Something went wrong');
    console.error(err);
  }
};

module.exports = {
  getEvents,
  getEventsById,
};
