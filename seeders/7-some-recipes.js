"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          title: "Tacos",
          content: "Tacos with guacamole and mexican sauce",
          image:
            "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2021/South%20Of%20The%20Border%20Beef%20Tacos.jpg.jpeg?itok=NYreD6xD",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lasagna",
          content: "Lasagna with bolognese and parmesan cheese",
          image:
            "https://www.simplyrecipes.com/thmb/Hm1DTQDZ9Dhkl7zTUkD6idFKmT8=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ramen",
          content: "Ramen with vegetables and pork",
          image:
            "https://static.ah.nl/static/recepten/img_124772_1024x748_JPG.jpg",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Carbonara",
          content: "Spaghetti with eggs and pecorino",
          image:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/AB4B5C21-9E04-4AF1-8690-811E91ECF810/Derivates/15F71685-2C46-405B-AB46-3D12E44C1562.jpg",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gnocchi",
          content: "Gnocchi with ragù!",
          image:
            "https://www.kikkoman.eu/fileadmin/_processed_/a/e/csm_WEB_Spicy_tomato_and_sausage_gnocchi_with_fennel_and_spinach_b1e3a765d7.jpg",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beef",
          content: "Beef with potatoes!",
          image:
            "https://media.istockphoto.com/photos/grilled-striploin-steak-picture-id535786572?k=20&m=535786572&s=612x612&w=0&h=WAOuIsIUQB7zVW23C6MX9y5QCyl6KLPL2eYcOcc_Qdk=",
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
