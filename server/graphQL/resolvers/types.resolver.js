const { getFighterByColor, getChamp } = require('../helper');

exports.get_fighter_potn = (fighter) => fighter.getPotn();
exports.get_fighter_division = (fighter) => fighter.getDivision();
exports.get_fighter_fights = (fighter) => fighter.getFights();
exports.get_blue_fighter = (fight) => getFighterByColor(fight, 'blue');
exports.get_red_fighter = async (fight) => getFighterByColor(fight, 'red');
exports.get_fight_event = (fight) => fight.getEvent();
exports.get_fight_division = (fight) => fight.getDivision();
exports.get_event_fights = (event) => event.getFights();
exports.get_event_potns = (event) => event.getPotn();
exports.get_event_fotn = (event) => event.getFights({ where: { fotn: true } });
exports.get_division_fighters = (division) => division.getFighters();
exports.get_division_fights = (division) => division.getFights();
exports.get_division_champ = (division) => getChamp(division);
