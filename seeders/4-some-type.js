"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "types",
      [
        {
          title: "Italian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Japanese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chinese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "French",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lebanese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("types", null, {});
  },
};
