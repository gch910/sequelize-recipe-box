'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    title: DataTypes.STRING
  }, {});
  recipes.associate = function(models) {
    Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId' });
    Recipe.hasMany(models.Ingredient, { foreignKey: 'recipeId' });
  };
  return recipes;
};
