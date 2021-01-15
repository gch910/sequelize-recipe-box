'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredients = sequelize.define('ingredients', {
    amount: DataTypes.NUMERIC,
    mesurmentUnitId: DataTypes.INTEGER,
    foodStuff: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {});
  ingredients.associate = function(models) {
    Ingredient.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
    Ingredient.belongsTo(models.Measurementunit, { foreignKey: 'measurementUnitId' });
  };
  return ingredients;
};
