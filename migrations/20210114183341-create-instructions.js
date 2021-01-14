'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('instructions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specification: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      listOrder: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "recipes"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('instructions');
  }
};