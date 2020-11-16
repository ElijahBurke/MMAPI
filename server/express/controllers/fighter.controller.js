const models = require('../models');

const getFighters = async (req, res) => {
  try {
    const result = await models.fighters.findAll();
    res.status = 200;
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

const getFighter = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await models.fighters.findOne({
      where: { id },
      include: [{
        model: models.fights,
        as: 'fights',
        include: models.fighters,
      }, {
        model: models.events,
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
  getFighters,
  getFighter,
};
