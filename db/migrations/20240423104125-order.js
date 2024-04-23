'use strict';

const { OrderSchema, ORDER_TABLE } = require('./../models/orderModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE);
  }
};
