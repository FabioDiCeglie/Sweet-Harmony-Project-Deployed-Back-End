"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      booking.belongsTo(models.chef, { foreignKey: "chefId" });
      booking.belongsTo(models.user, { foreignKey: "userBookingId" });
      booking.hasMany(models.message, { foreignKey: "bookingId" });
    }
  }
  booking.init(
    {
      dates: { type: DataTypes.STRING, allowNull: false },
      sTime: { type: DataTypes.STRING, allowNull: false },
      eTime: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      informations: { type: DataTypes.TEXT, allowNull: true },
      isBooked: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "booking",
    }
  );
  return booking;
};
