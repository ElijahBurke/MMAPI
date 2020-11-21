/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const password = require('../password');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const currentDb = (process.env.NODE_ENV === 'test'
  ? process.env.DATABASE_NAME_TEST
  : process.env.DATABASE_NAME);


const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(currentDb, process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    // eslint-disable-next-line global-require
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
