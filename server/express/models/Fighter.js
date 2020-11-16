module.exports = (sequelize, DataTypes) => {
  const Fighter = sequelize.define('fighters', {
    name: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.STRING,
    },
    weight_lbs: {
      type: DataTypes.STRING,
    },
    reach: {
      type: DataTypes.STRING,
    },
    stance: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.STRING,
    },
    wins: {
      type: DataTypes.STRING,
    },
    losses: {
      type: DataTypes.STRING,
    },
    no_contest: {
      type: DataTypes.STRING,
    },
    record: {
      type: DataTypes.STRING,
    },
    is_champ: {
      type: DataTypes.BOOLEAN,
    },
    slpm: {
      type: DataTypes.DECIMAL(10, 2),
    },
    str_acc: {
      type: DataTypes.STRING,
    },
    sapm: {
      type: DataTypes.DECIMAL(10, 2),
    },
    str_def: {
      type: DataTypes.STRING,
    },
    td_avg: {
      type: DataTypes.DECIMAL(10, 2),
    },
    td_def: {
      type: DataTypes.STRING,
    },
    td_acc: {
      type: DataTypes.STRING,
    },
    sub_avg: {
      type: DataTypes.DECIMAL(10, 2),
    },
  }, { timestamps: false });

  Fighter.associate = (models) => {
    models.fighters.belongsToMany(models.fights, { through: 'fighter_fights' });
    models.fighters.belongsToMany(models.events, { through: 'potns', as: 'potn' });
    models.fighters.belongsTo(models.divisions);
  };

  return Fighter;
};
