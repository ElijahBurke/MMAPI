module.exports = (sequelize, DataTypes) => {
  const Potn = sequelize.define('potns', {
  }, { timestamps: false });

  return Potn;
};
