"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.review, { foreignKey: "userid" });
      user.hasMany(models.booking, { foreignKey: "userBookingId" });
      user.belongsToMany(models.event, {
        through: "userEvents",
        foreignKey: "userEventId",
      });
      user.hasMany(models.message, { foreignKey: "userId" });
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
