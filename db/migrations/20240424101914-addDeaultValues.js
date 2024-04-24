'use strict';

const { DataTypes } = require('sequelize');
const { PRODUCT_TABLE, ProductSchema } = require('./../models/product.model');
const { CATEGORY_TABLE } = require('./../models/categoryModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(PRODUCT_TABLE, "estado", {
      allowNul: false,
      type: DataTypes.STRING,
      unique: false,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      defaultValue: "nuevo"
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(PRODUCT_TABLE, "category_id");
  }
};

// INSERT INTO `products`(`id`, `name`, `image`, `description`, `price`, `category_id`) VALUES (1,'nombre1','https://image','descripcion',15,3);
