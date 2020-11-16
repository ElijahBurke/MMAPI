const models = require('../models');

const getEvents = async (req, res) => {
  try {
    const result = await models.events.findAll({});
    res.status = 200;
    res.send(result);
  } catch (err) {
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
    res.status = 200;
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getEvents,
  getEventsById,
};
