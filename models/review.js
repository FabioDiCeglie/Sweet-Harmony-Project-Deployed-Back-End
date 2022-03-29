"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review.belongsTo(models.chef, { foreignKey: "chefid" });
      review.belongsTo(models.user, { foreignKey: "userid" });
    }
  }
  review.init(
    {
      rating: DataTypes.INTEGER,
      content: { type: DataTypes.TEXT, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
