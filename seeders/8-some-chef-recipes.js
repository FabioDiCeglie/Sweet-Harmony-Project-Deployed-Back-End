"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "chefRecipes",
      [
        {
          recipesId: 1,
          chefRecipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipesId: 2,
          chefRecipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipesId: 3,
          chefRecipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipesId: 4,
          chefRecipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipesId: 5,
          chefRecipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipesId: 6,
          chefRecipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipesId: 4,
          chefRecipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipesId: 5,
          chefRecipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipesId: 6,
          chefRecipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("chefRecipes", null, {});
  },
};
