const { sequelize, Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUSer);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const seq = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(seq);

seq.sync();

module.exports = seq;
