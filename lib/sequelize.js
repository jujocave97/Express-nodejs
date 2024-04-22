const { sequelize, Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUSer);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const seq = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});

setupModels(seq);

module.exports = seq;
