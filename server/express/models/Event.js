module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('events', {
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
  }, { timestamps: false });

  Event.associate = (models) => {
    models.events.hasMany(models.fights);
    models.events.belongsToMany(models.fighters, { through: 'potns', as: 'potn' });
  };

  return Event;
};
