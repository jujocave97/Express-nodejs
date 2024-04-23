'use strict';
const { DataTypes } = require('sequelize');
const { PRODUCT_TABLE, ProductSchema } = require('./../models/productModel');
const { CATEGORY_TABLE } = require('./../models/categoryModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(PRODUCT_TABLE, "category_id", {
      allowNul: false,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: CATEGORY_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn(PRODUCT_TABLE, "category_id");
  }
};
