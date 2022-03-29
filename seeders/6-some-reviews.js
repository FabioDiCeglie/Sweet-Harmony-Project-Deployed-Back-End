"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          rating: 2,
          content: "This chef is really good!",
          name: "Fabio",
          chefid: 1,
          userid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 2,
          content: "This chef is really good!",
          name: "Danny",
          chefid: 1,
          userid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 2,
          content: "This chef is really good!",
          name: "Lucas",
          chefid: 1,
          userid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 3,
          content: "This chef is really good!",
          name: "Emre",
          chefid: 2,
          userid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 4,
          content: "This chef is really good!",
          name: "Milton",
          chefid: 3,
          userid: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 5,
          content: "This chef is really good!",
          name: "Rudolf",
          chefid: 4,
          userid: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 3,
          content: "It was ok",
          name: "Emre",
          chefid: 2,
          userid: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 4,
          content: "An amazing dinner!",
          name: "Milton",
          chefid: 1,
          userid: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
