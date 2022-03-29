"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "chefs",
      [
        {
          fullName: "Urs",
          email: "urs@gmail.com",
          password: bcrypt.hashSync("urs1234", SALT_ROUNDS),
          phone: "3986578798",
          imageUrl:
            "https://media-exp1.licdn.com/dms/image/C4E03AQFiDqULSPNTcQ/profile-displayphoto-shrink_800_800/0/1632233900829?e=1651708800&v=beta&t=orNInYy-dZVKME4wv4egvbSEumVlVkYWEeBxA9oOIUA",
          description:
            "I'm a nice person, positive and negative, maybe more negative. I love to cook asian food and I love italian people and of course italian food too, just book me!(I'm also a developer and an artist)",
          experience: "I have a lot experience with asian and french cuisine",
          location: "Amsterdam",
          priceForHour: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Gordon ",
          email: "gordon@gmail.com",
          password: bcrypt.hashSync("gordon1234", SALT_ROUNDS),
          phone: "39865754378",
          imageUrl:
            "https://www.biography.com/.image/t_share/MTgwOTcxNDk2NDQzNzQ5NzM2/gettyimages-1148433914.jpg",
          description: "Sometimes angry, british chef!",
          experience: "British cuisine and 16 michelin star",
          location: "Rotterdam",
          priceForHour: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Luca",
          email: "luca@gmail.com",
          password: bcrypt.hashSync("luca1234", SALT_ROUNDS),
          phone: "3981312432",
          imageUrl:
            "https://www.jre.eu/static/optimized/http/belgium/gloriette/2021/la-gloriette-portrait-olivier-bauche-2.jpg/f2990a981c1fee620ff6a21bb47dd7b5.jpg",
          description: "French chef",
          experience: "Worked in many french restaurants and chinese!",
          location: "Amsterdam",
          priceForHour: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Yamamoto",
          email: "yamamoto@gmail.com",
          password: bcrypt.hashSync("luca1234", SALT_ROUNDS),
          phone: "3981312432",
          imageUrl:
            "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          description: "Japanese chef",
          experience: "Worked in Tokyo and Hong Kong.",
          location: "Amsterdam",
          priceForHour: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Marie",
          email: "marie@gmail.com",
          password: bcrypt.hashSync("luca1234", SALT_ROUNDS),
          phone: "3981312432",
          imageUrl:
            "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
          description: "European chef",
          experience: "Worked in many restaurants in Stockholm and Amsterdam",
          location: "Utrecht",
          priceForHour: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Luigi",
          email: "luigi@gmail.com",
          password: bcrypt.hashSync("luca1234", SALT_ROUNDS),
          phone: "3924387248",
          imageUrl: "https://i.insider.com/5ac2829e10d6bb26008b45d8?width=700",
          description: "Italian chef",
          experience: "Worked in italian and french restaurants",
          location: "Amsterdam",
          priceForHour: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Josè",
          email: "josè@gmail.com",
          password: bcrypt.hashSync("josè1234", SALT_ROUNDS),
          phone: "3924387248",
          imageUrl:
            "https://d1zzxdyvtq79bu.cloudfront.net/uploads/images/cache/big/67/09/67097.jpg",
          description: "Brazilian chef",
          experience: "Worked in brazilian restaurants",
          location: "Amsterdam",
          priceForHour: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Juan",
          email: "juan@gmail.com",
          password: bcrypt.hashSync("juan1234", SALT_ROUNDS),
          phone: "3894387248",
          imageUrl:
            "https://lirp-cdn.multiscreensite.com/517f009e/dms3rep/multi/opt/Foto+website+10-1920w.png",
          description: "Spanish chef",
          experience: "Worked in spanish restaurants",
          location: "Amsterdam",
          priceForHour: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Andrea",
          email: "andrea@gmail.com",
          password: bcrypt.hashSync("andrea1234", SALT_ROUNDS),
          phone: "3894387248",
          imageUrl:
            "https://d3l9f26xbu27n5.cloudfront.net/media/Thuis_kok_Angelo_4ddInlX.jpg",
          description: "Lebanese chef",
          experience: "Worked in Italy and France",
          location: "Amsterdam",
          priceForHour: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("chefs", null, {});
  },
};
