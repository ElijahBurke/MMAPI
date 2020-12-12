const models = require('../models');

const getFights = async (req, res) => {
  try {
    const result = await models.fights.findAll({
      include: [{
        model: models.fighters,
      }],
    });
    res.status = 200;
    res.send(result);
  } catch (err) {
    res.status(405).send(err);
  }
};

const getFightById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await models.fights.findOne({
      where: { id },
      include: [models.fighters, models.events, models.divisions],
    });
    res.status = 200;
    res.send(result);
  } catch (err) {
    res.status(405).send(err);
  }
};

module.exports = {
  getFights,
  getFightById,
};
