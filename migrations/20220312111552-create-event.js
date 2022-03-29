"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dates: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nPeople: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      maxNPeople: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      priceForPerson: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      information: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("events");
  },
};
