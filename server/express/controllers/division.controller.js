const models = require('../models');

const getDivisions = async (req, res) => {
  try {
    const result = await models.divisions.findAll();
    if (result) {
      res.status(200);
      res.send(result);
    } else {
      res.status(4);
      res.send('Error: data not found');
    }
  } catch (err) {
    res.status(500);
    res.send('Something went wrong');
    console.error(err);
  }
};

const getDivision = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await models.divisions.findOne({
      where: { id },
      include: [{
        model: models.fighters,
        as: 'fighters',
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
  getDivisions,
  getDivision,
};
