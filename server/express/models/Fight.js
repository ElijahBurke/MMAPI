module.exports = (sequelize, DataTypes) => {
  const Fight = sequelize.define('fights', {
    winner: {
      type: DataTypes.STRING,
    },
    method: {
      type: DataTypes.STRING,
    },
    details: {
      type: DataTypes.STRING,
    },
    rounds: {
      type: DataTypes.INTEGER,
    },
    round_end_time: {
      type: DataTypes.STRING,
    },
    fotn: {
      type: DataTypes.BOOLEAN,
    },
    n_rounds: {
      type: DataTypes.STRING,
    },
    b_kd: {
      type: DataTypes.INTEGER,
    },
    b_sig_str_attempts: {
      type: DataTypes.INTEGER,
    },
    b_sig_str_landed: {
      type: DataTypes.INTEGER,
    },
    b_total_str_attempts: {
      type: DataTypes.INTEGER,
    },
    b_total_str_landed: {
      type: DataTypes.INTEGER,
    },
    b_td_attempts: {
      type: DataTypes.INTEGER,
    },
    b_td_landed: {
      type: DataTypes.INTEGER,
    },
    b_sub_att: {
      type: DataTypes.INTEGER,
    },
    b_reversal: {
      type: DataTypes.INTEGER,
    },
    b_ctrl: {
      type: DataTypes.STRING,
    },
    r_kd: {
      type: DataTypes.INTEGER,
    },
    r_sig_str_attempts: {
      type: DataTypes.INTEGER,
    },
    r_sig_str_landed: {
      type: DataTypes.INTEGER,
    },
    r_total_str_attempts: {
      type: DataTypes.INTEGER,
    },
    r_total_str_landed: {
      type: DataTypes.INTEGER,
    },
    r_td_attempts: {
      type: DataTypes.INTEGER,
    },
    r_td_landed: {
      type: DataTypes.INTEGER,
    },
    r_sub_att: {
      type: DataTypes.INTEGER,
    },
    r_reversal: {
      type: DataTypes.INTEGER,
    },
    r_ctrl: {
      type: DataTypes.STRING,
    },
    b_kd_r1: {
      type: DataTypes.INTEGER,
    },
    b_sig_str_attempts_r1: {
      type: DataTypes.INTEGER,
    },
    b_sig_str_landed_r1: {
      type: DataTypes.INTEGER,
    },
    b_total_str_attempts_r1: {
      type: DataTypes.INTEGER,
    },
    b_total_str_landed_r1: {
      type: DataTypes.INTEGER,
    },
    b_td_attempts_r1: {
      type: DataTypes.INTEGER,
    },
    b_td_landed_r1: {
      type: DataTypes.INTEGER,
    },
    b_sub_att_r1: {
      type: DataTypes.INTEGER,
    },
    b_reversal_r1: {
      type: DataTypes.INTEGER,
    },
    b_ctrl_r1: {
      type: DataTypes.STRING,
    },
    r_kd_r1: {
      type: DataTypes.INTEGER,
    },
    r_sig_str_attempts_r1: {
      type: DataTypes.INTEGER,
    },
    r_sig_str_landed_r1: {
      type: DataTypes.INTEGER,
    },
    r_total_str_attempts_r1: {
      type: DataTypes.INTEGER,
    },
    r_total_str_landed_r1: {
      type: DataTypes.INTEGER,
    },
    r_td_attempts_r1: {
      type: DataTypes.INTEGER,
    },
    r_td_landed_r1: {
      type: DataTypes.INTEGER,
    },
    r_sub_att_r1: {
      type: DataTypes.INTEGER,
    },
    r_reversal_r1: {
      type: DataTypes.INTEGER,
    },
    r_ctrl_r1: {
      type: DataTypes.STRING,
    },
    b_kd_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sig_str_attempts_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sig_str_landed_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_total_str_attempts_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_total_str_landed_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_td_attempts_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_td_landed_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sub_att_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_reversal_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_ctrl_r2: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    r_kd_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sig_str_attempts_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sig_str_landed_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_total_str_attempts_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_total_str_landed_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_td_attempts_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_td_landed_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sub_att_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_reversal_r2: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_ctrl_r2: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    b_kd_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sig_str_attempts_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sig_str_landed_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_total_str_attempts_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_total_str_landed_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_td_attempts_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_td_landed_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sub_att_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_reversal_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_ctrl_r3: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    r_kd_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sig_str_attempts_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sig_str_landed_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_total_str_attempts_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_total_str_landed_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_td_attempts_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_td_landed_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sub_att_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_reversal_r3: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_ctrl_r3: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    b_kd_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sig_str_attempts_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sig_str_landed_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_total_str_attempts_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_total_str_landed_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_td_attempts_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_td_landed_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sub_att_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_reversal_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_ctrl_r4: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    r_kd_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sig_str_attempts_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sig_str_landed_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_total_str_attempts_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_total_str_landed_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_td_attempts_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_td_landed_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sub_att_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_reversal_r4: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_ctrl_r4: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    b_kd_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sig_str_attempts_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sig_str_landed_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_total_str_attempts_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_total_str_landed_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_td_attempts_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_td_landed_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_sub_att_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_reversal_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    b_ctrl_r5: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    r_kd_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sig_str_attempts_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sig_str_landed_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_total_str_attempts_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_total_str_landed_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_td_attempts_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_td_landed_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_sub_att_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_reversal_r5: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    r_ctrl_r5: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  }, { timestamps: false });

  Fight.associate = (models) => {
    models.fights.belongsToMany(models.fighters, { through: 'fighter_fights' });
    models.fights.belongsTo(models.divisions);
    models.fights.belongsTo(models.events);
  };

  return Fight;
};
