module.exports = (sequelize, DataTypes) => {
  const fighterFights = sequelize.define('fighter_fights', {
    color: {
      type: DataTypes.STRING,
    },
  }, { timestamps: false });

  return fighterFights;
};
