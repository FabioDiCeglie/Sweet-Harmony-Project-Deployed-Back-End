"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("messages", "bookingId", {
      type: Sequelize.INTEGER,
      references: {
        model: "bookings",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("messages", "chefId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "chefs",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("messages", "userId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("messages", "bookingId");
    await queryInterface.removeColumn("messages", "chefId");
    await queryInterface.removeColumn("messages", "userId");
  },
};
