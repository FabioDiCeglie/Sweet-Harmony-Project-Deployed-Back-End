"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chef extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chef.hasMany(models.booking, { foreignKey: "chefId" });
      chef.belongsToMany(models.type, {
        through: "chefTypes",
        foreignKey: "chefTypeId",
      });
      chef.hasMany(models.review, { foreignKey: "chefid" });
      chef.belongsToMany(models.recipe, {
        through: "chefRecipes",
        foreignKey: "chefRecipeId",
      });
      chef.hasMany(models.event, { foreignKey: "chefEventId" });
      chef.hasMany(models.message, { foreignKey: "chefId" });
    }
  }
  chef.init(
    {
      fullName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      experience: { type: DataTypes.TEXT, allowNull: false },
      location: { type: DataTypes.STRING, allowNull: false },
      priceForHour: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "chef",
    }
  );
  return chef;
};
