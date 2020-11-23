const models = require('../models');

const getFighters = async (req, res) => {
  try {
    const result = await models.fighters.findAll();
    if (result) {
      res.status(200);
      res.send(result);
    } else {
      res.status(404);
      res.send('Error: data not found');
    }
  } catch (err) {
    res.status(500);
    res.send('Error: Something went wrong');
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
    if (result) {
      res.status(200);
      res.send(result);
    } else {
      res.status(404);
      res.send('Error: data not found');
    }
  } catch (err) {
    res.status(500);
    res.send('Error: Something went wrong');
    console.error(err);
  }
};

module.exports = {
  getFighters,
  getFighter,
};
