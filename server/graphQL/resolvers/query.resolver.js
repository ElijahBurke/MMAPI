const db = require('../../express/models');

exports.fighters = (_, args) => db.fighters.findAll({ where: args });
exports.fights = (_, args) => db.fights.findAll({ where: args });
exports.divisions = (_, args) => db.divisions.findAll({ where: args });
exports.events = (_, args) => db.events.findAll({ where: args });
