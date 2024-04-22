'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customerModel');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropAllEnums(CUSTOMER_TABLE);
  }
};
