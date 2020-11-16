exports.getFighterByColor = (fight, color) => fight
  .getFighters({ raw: true })
  .then((res) => res.filter((fighter) => fighter['fighter_fights.color'] === color)[0]);
exports.getChamp = (division) => division
  .getFighters({ raw: true, where: { is_champ: true } }).then((res) => res[0]);
