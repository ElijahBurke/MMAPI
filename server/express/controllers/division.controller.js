const models = require('../models');

const getDivisions = async (req, res) => {
  try {
    const result = await models.divisions.findAll();
    res.status = 200;
    res.send(result);
  } catch (err) {
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
    res.status = 200;
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getDivisions,
  getDivision,
};
