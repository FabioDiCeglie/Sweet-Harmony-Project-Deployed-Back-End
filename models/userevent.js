"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userEvent.belongsTo(models.user, { foreignKey: "userEventId" });
      userEvent.belongsTo(models.event, { foreignKey: "eventId" });
    }
  }
  userEvent.init(
    {
      eventId: DataTypes.INTEGER,
      userEventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userEvent",
    }
  );
  return userEvent;
};
