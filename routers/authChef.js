const bcrypt = require("bcrypt");
const { Router } = require("express");
const { types } = require("pg/lib");
const { toJWT } = require("../auth/jwt");
const authMiddlewareChef = require("../auth/middlewareAuthChef");
const Chef = require("../models").chef;
const Bookings = require("../models").booking;
const Type = require("../models").type;
const ChefType = require("../models").chefType;
const Recipes = require("../models").recipe;
const ChefRecipes = require("../models").chefRecipes;
const { SALT_ROUNDS } = require("../config/constants");
const nodemailer = require("nodemailer");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const chef = await Chef.findOne({
      where: { email },
      include: [Type],
    });

    if (!chef || !bcrypt.compareSync(password, chef.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    const bookings = await Bookings.findAll({ where: { chefId: chef.id } });
    delete chef.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ chefId: chef.id });
    return res.status(200).send({ token, chef, bookings });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const {
    fullName,
    email,
    password,
    phone,
    imageUrl,
    description,
    experience,
    location,
    priceForHour,
  } = req.body;
  if (
    !fullName ||
    !email ||
    !password ||
    !phone ||
    !imageUrl ||
    !description ||
    !experience ||
    !location ||
    !priceForHour
  ) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newChef = await Chef.create({
      fullName,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      phone,
      imageUrl,
      description,
      experience,
      location,
      priceForHour,
    });

    const { cookingTypes } = req.body;
    const chefTypesPromises = cookingTypes.map(async (id) => {
      const newPromise = await ChefType.create({
        chefTypeId: newChef.id,
        typeId: id,
      });
      return newPromise;
    });

    await Promise.all(chefTypesPromises);

    delete newChef.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ chefId: newChef.id });
    const chef = await Chef.findOne({
      where: { email: newChef.email },
      include: [Type],
    });
    res.status(201).json({ token, chef });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddlewareChef, async (req, res) => {
  // don't send back the password hash
  const chef = await Chef.findOne({
    where: { id: req.chef.id },
    include: [Type],
  });
  delete chef.dataValues["password"];
  const bookings = await Bookings.findAll({
    where: { chefId: req.chef.id },
  });
  res.status(200).send({ chef, bookings });
});

//BATTLEPLAN
//Check if the user is authorized to do this action
//Find the booking to update with id
//Update the booking to true
router.put(
  "/me/updateBooking/:id",
  authMiddlewareChef,
  async (req, res, next) => {
    try {
      const chef = req.chef;
      if (!chef) {
        res.status(401).send("You are not authorized!");
      }
      //check if is the correct booking
      const bookingId = parseInt(req.params.id);
      if (!bookingId) {
        return res.status(404).send(`${bookingId} not found!`);
      }

      //select that booking by id
      const getBookingById = await Bookings.findByPk(bookingId);
      if (!getBookingById) {
        res.status(404).send(`${getBookingById} not found!`);
      } else {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
          host: "smtp-mail.outlook.com",
          secureConnection: false,
          port: 587,
          tls: {
            ciphers: "SSLv3",
          },
          auth: {
            user: "makda1012@hotmail.com",
            pass: "makda1998",
          },
        });
        //update booking isBooked to false
        const updateBooking = await getBookingById.update({ isBooked: true });
        console.log("what is booking email", getBookingById.email);
        const emailTemplate = {
          from: "makda1012@hotmail.com", // sender address
          to: getBookingById.email, // list of receivers
          subject: "Updating from your booking!", // Subject line
          text: "Hello from Sweet Harmony!", // plain text body
          html: `<h1>The chef ${chef.fullName} accept your booking! This is the email of the chef ${chef.email}</h1>`, // html body
        };

        transporter.sendMail(emailTemplate, (error) => {
          if (error) {
            console.log("error send email", error);
          } else {
            console.log("Message sent: %s");
          }
        });
        res.status(200).send(updateBooking);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

//BATTLEPLAN
//Check if the user is authorized to do this action
//Find the booking to update with id
//Delete the booking to true
router.delete(
  "/me/deleteBooking/:id",
  authMiddlewareChef,
  async (req, res, next) => {
    try {
      const chef = req.chef;
      if (!chef) {
        res.status(401).send("You are not authorized!");
      }
      //check if is the correct booking
      const bookingId = parseInt(req.params.id);
      if (!bookingId) {
        return res.status(404).send(`${bookingId} not found!`);
      }

      //select that booking by id
      const getBookingById = await Bookings.findByPk(bookingId);
      if (!getBookingById) {
        res.status(404).send(`${getBookingById} not found!`);
      } else {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
          host: "smtp-mail.outlook.com",
          secureConnection: false,
          port: 587,
          tls: {
            ciphers: "SSLv3",
          },
          auth: {
            user: "makda1012@hotmail.com",
            pass: "makda1998",
          },
        });
        //delete that booking
        const deleteBooking = await getBookingById.destroy();

        const emailTemplate = {
          from: "makda1012@hotmail.com", // sender address
          to: getBookingById.email, // list of receivers
          subject: "Delete booking!", // Subject line
          text: "Hello from Sweet Harmony!", // plain text body
          html: `<h1>The chef can't make your booking happen in dates: ${getBookingById.dates}!We are really sorry for that! (We are not!)</h1>`, // html body
        };

        transporter.sendMail(emailTemplate, (error) => {
          if (error) {
            console.log("error send email", error);
          } else {
            console.log("Message sent: %s");
          }
        });
        res.status(200).send(deleteBooking);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

//BATTLEPLAN
//Check if the user is authorized to do this action
//Find the chef to update with id
//Update the information of the chef
router.put("/me/updateChef", authMiddlewareChef, async (req, res, next) => {
  try {
    const chef = req.chef;
    if (!chef) {
      res.status(401).send("You are not authorized!");
    }

    //select that chef by id
    const updateChefById = await Chef.findByPk(chef.id);
    if (!updateChefById) {
      res.status(404).send(`${updateChefById} not found!`);
    } else {
      const {
        fullName,
        email,
        phone,
        imageUrl,
        description,
        experience,
        location,
      } = req.body;
      //update chef
      const updateChef = await updateChefById.update({
        fullName,
        email,
        phone,
        imageUrl,
        description,
        experience,
        location,
      });
      res.status(200).send(updateChefById);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Create one recipe if you are the chef
router.post("/create/recipe", authMiddlewareChef, async (req, res, next) => {
  try {
    const chef = req.chef;
    if (!chef) {
      res.status(401).send("You are not authorized!");
    }
    const { title, description, image } = req.body;
    if (!title || !description || !image) {
      res.status(400).send("You need to write a title, description and image!");
    }

    const newRecipe = await Recipes.create({
      title,
      content: description,
      image,
    });

    const createChefRecipes = await ChefRecipes.create({
      chefRecipeId: chef.id,
      recipesId: newRecipe.id,
    });

    res.status(200).send(newRecipe);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Update information recipe if you are logged in as a chef
router.patch("/recipe/:id/edit", authMiddlewareChef, async (req, res, next) => {
  try {
    const chef = req.chef;
    if (!chef) {
      res.status(401).send("You are not authorized!");
    }
    const recipeId = parseInt(req.params.id);
    const recipe = await Recipes.findByPk(recipeId);
    if (!recipe) {
      res.status(404).send("Recipe not found!");
    } else {
      const { title, content, image } = req.body;
      const updateRecipe = await recipe.update({ title, content, image });
      res.status(200).send(updateRecipe);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
