"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      recipe.belongsToMany(models.chef, {
        through: "chefRecipes",
        foreignKey: "recipesId",
      });
    }
  }
  recipe.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING,
      likes: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
