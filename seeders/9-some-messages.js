"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "messages",
      [
        {
          message: "See you there!",
          bookingId: 7,
          chefId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Yes of course!",
          bookingId: 7,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "See you there!",
          bookingId: 7,
          chefId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Yes of course!",
          bookingId: 7,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("messages", null, {});
  },
};
