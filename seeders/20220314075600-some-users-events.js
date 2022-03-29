"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userEvents",
      [
        {
          eventId: 1,
          userEventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          userEventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userEvents", null, {});
  },
};
