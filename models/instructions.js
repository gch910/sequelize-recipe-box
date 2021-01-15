'use strict';
module.exports = (sequelize, DataTypes) => {
  const instructions = sequelize.define('instructions', {
    specification: DataTypes.TEXT,
    listOrder: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  instructions.associate = function(models) {
    Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
  };
  return instructions;
};
