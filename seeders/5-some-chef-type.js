"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "chefTypes",
      [
        {
          chefTypeId: 1,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chefTypeId: 1,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("chefTypes", null, {});
  },
};
