const { Router } = require("express");
const router = new Router();
const authMiddlewareChef = require("../auth/middlewareAuthChef");
const authMiddleware = require("../auth/middleware");

//models
const Chef = require("../models").chef;
const Recipes = require("../models").recipe;
const Events = require("../models").event;
const userEvent = require("../models").userEvent;
const Users = require("../models").user;

//Get all the events available
router.get("/", async (req, res, next) => {
  try {
    const getEvents = await Events.findAll({
      include: [{ model: Chef }, { model: Users }],
    });
    res.status(200).send(getEvents);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Get one specific event by primary key + chef
router.get("/:id", async (req, res, next) => {
  try {
    const eventId = parseInt(req.params.id);
    if (!eventId) {
      res.status(404).send(`${eventId} not found!`);
    } else {
      const getEvent = await Events.findByPk(eventId, {
        include: [{ model: Chef }],
      });
      res.status(200).send(getEvent);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Create one recipe if you are the chef
router.post("/create", authMiddlewareChef, async (req, res, next) => {
  try {
    const chef = req.chef;
    if (!chef) {
      res.status(401).send("You are not authorized!");
    }
    const {
      dateString,
      startTimeString,
      endTimeString,
      name,
      location,
      image,
      maxNPeople,
      priceForPerson,
      information,
    } = req.body;
    if (
      !name ||
      !location ||
      !image ||
      !dateString ||
      !startTimeString ||
      !endTimeString ||
      !maxNPeople ||
      !priceForPerson
    ) {
      res.status(400).send("You need to fill all the information!");
    }

    const newEvents = await Events.create({
      name: name,
      location: location,
      image: image,
      dates: dateString,
      sTime: startTimeString,
      eTime: endTimeString,
      maxNPeople: maxNPeople,
      priceForPerson: priceForPerson,
      information: information,
      chefEventId: chef.id,
    });

    res.status(200).send(newEvents);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Join the event if you are the user
router.post("/join/:id", authMiddleware, async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      res.status(401).send("You are not authorized!");
    }

    const eventId = parseInt(req.params.id);
    const findEvent = await Events.findByPk(eventId);
    if (!findEvent) {
      res.status(404).send("Id not found!");
    }

    const joinEvent = await userEvent.create({
      eventId: findEvent.id,
      userEventId: user.id,
    });

    res.status(200).send({ joinEvent, user });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
