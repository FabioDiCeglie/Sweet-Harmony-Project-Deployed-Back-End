"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chefType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chefType.belongsTo(models.chef, { foreignKey: "chefTypeId" });
      chefType.belongsTo(models.type, { foreignKey: "typeId" });
    }
  }
  chefType.init(
    {
      chefTypeId: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "chefType",
    }
  );
  return chefType;
};
