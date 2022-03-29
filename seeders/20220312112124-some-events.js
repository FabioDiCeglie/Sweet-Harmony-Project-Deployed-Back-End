"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          name: "Asian event",
          location: "Amsterdam",
          image:
            "https://i1.wp.com/mytravelboektje.com/wp-content/uploads/2017/08/20017802_454923681547218_3310915277171618267_o-600x338.jpg?resize=600%2C338",
          dates: "28-03-2022",
          sTime: "18:00",
          eTime: "22:00",
          nPeople: 0,
          maxNPeople: 20,
          priceForPerson: 40,
          information:
            "Is gonna be an event in the center of Amsterdam, an experience chef gonna cook different asian recipes for you!",
          createdAt: new Date(),
          updatedAt: new Date(),
          chefEventId: 3,
        },
        {
          name: "Italian cuisine event",
          location: "Amsterdam",
          image: "https://www.hapskorea.com/wp-content/uploads/2019/10/iff.jpg",
          dates: "30-03-2022",
          sTime: "18:00",
          eTime: "23:00",
          nPeople: 0,
          maxNPeople: 20,
          priceForPerson: 50,
          information:
            "Is gonna be an event in the center of Amsterdam, an experience chef gonna cook different italian recipes for you!",
          createdAt: new Date(),
          updatedAt: new Date(),
          chefEventId: 1,
        },
        {
          name: "Greek cuisine event",
          location: "Rotterdam",
          image:
            "https://www.bakersfieldgreekfoodfestival.org/assets/images/slider/ProfileFestBanner2021.jpg",
          dates: "29-03-2022",
          sTime: "18:00",
          eTime: "22:00",
          nPeople: 0,
          maxNPeople: 20,
          priceForPerson: 40,
          information:
            "Is gonna be an event in the center of Rotterdam, an experience chef gonna cook different greek recipes for you!",
          createdAt: new Date(),
          updatedAt: new Date(),
          chefEventId: 2,
        },
        {
          name: "Indian cuisine event",
          location: "Utrecht",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjb0c5PgbnbQDTXk4puZ5_F2IPOtNLFs3nCQ&usqp=CAU",
          dates: "30-03-2022",
          sTime: "18:00",
          eTime: "22:00",
          nPeople: 0,
          maxNPeople: 20,
          priceForPerson: 40,
          information:
            "Is gonna be an event in the center of Utrecht, an experience chef gonna cook different indian recipes for you!",
          createdAt: new Date(),
          updatedAt: new Date(),
          chefEventId: 5,
        },
        {
          name: "Spanish cuisine event",
          location: "Rotterdam",
          image:
            "https://media.istockphoto.com/vectors/spanish-cuisine-illustrations-tapas-for-restaurant-vector-hand-drawn-vector-id1142163731?s=170667a",
          dates: "30-03-2022",
          sTime: "18:00",
          eTime: "22:00",
          nPeople: 0,
          maxNPeople: 20,
          priceForPerson: 40,
          information:
            "Is gonna be an event in the center of Rotterdam, an experience chef gonna cook different spanish recipes for you!",
          createdAt: new Date(),
          updatedAt: new Date(),
          chefEventId: 4,
        },
        {
          name: "Lebanese cuisine event",
          location: "Amsterdam",
          image:
            "https://familyeguide.com/wp-content/uploads/2016/08/Lebanese-Food-Festival.png",
          dates: "30-03-2022",
          sTime: "18:00",
          eTime: "22:00",
          nPeople: 0,
          maxNPeople: 20,
          priceForPerson: 40,
          information:
            "Is gonna be an event in the center of Amsterdam, an experience chef gonna cook different lebanese recipes for you!",
          createdAt: new Date(),
          updatedAt: new Date(),
          chefEventId: 6,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("events", null, {});
  },
};
