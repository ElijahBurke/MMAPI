const models = require('../models');

const getEvents = async (req, res) => {
  try {
    const result = await models.events.findAll({});
    res.status(200);
    res.send(result);
  } catch (err) {
    res.status(405).send(err);
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
    res.status = 200;
    res.send(result);
  } catch (err) {
    res.status(405).send(err);
  }
};

module.exports = {
  getEvents,
  getEventsById,
};
