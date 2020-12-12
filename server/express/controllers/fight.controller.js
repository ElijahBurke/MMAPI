const models = require('../models');

const getFights = async (req, res) => {
  try {
    const result = await models.fights.findAll({
      include: [{
        model: models.fighters,
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

    if (result) {
      res.status(200);
      res.send(result);
    } else {
      res.status(404);
      res.send('Error: data not found');
    }
  } catch (err) {
    res.status(405).send(err);
  }
};

module.exports = {
  getFights,
  getFightById,
};
