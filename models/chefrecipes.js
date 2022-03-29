"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chefRecipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chefRecipes.belongsTo(models.chef, { foreignKey: "chefRecipeId" });
      chefRecipes.belongsTo(models.recipe, { foreignKey: "recipesId" });
    }
  }
  chefRecipes.init(
    {
      recipesId: DataTypes.INTEGER,
      chefRecipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "chefRecipes",
    }
  );
  return chefRecipes;
};
