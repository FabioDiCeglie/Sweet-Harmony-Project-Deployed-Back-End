"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      event.belongsTo(models.chef, { foreignKey: "chefEventId" });
      event.belongsToMany(models.user, {
        through: "userEvents",
        foreignKey: "eventId",
      });
    }
  }
  event.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      location: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
      dates: { type: DataTypes.STRING, allowNull: false },
      sTime: { type: DataTypes.STRING, allowNull: false },
      eTime: { type: DataTypes.STRING, allowNull: false },
      nPeople: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      maxNPeople: { type: DataTypes.INTEGER, allowNull: false },
      priceForPerson: { type: DataTypes.INTEGER, allowNull: false },
      information: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
