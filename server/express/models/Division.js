module.exports = (sequelize, DataTypes) => {
  const Division = sequelize.define('divisions', {
    division_name: {
      type: DataTypes.STRING,
    },
    min_weight: {
      type: DataTypes.INTEGER,
    },
    max_weight: {
      type: DataTypes.INTEGER,
    },
  }, { timestamps: false });

  Division.associate = (models) => {
    models.divisions.hasMany(models.fighters);
    models.divisions.hasMany(models.fights);
  };

  return Division;
};
