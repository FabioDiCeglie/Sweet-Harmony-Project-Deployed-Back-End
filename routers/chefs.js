const { Router } = require("express");
const { send } = require("express/lib/response");
const router = new Router();
const authMiddleware = require("../auth/middleware");

//models
const Chef = require("../models").chef;
const Type = require("../models").type;
const Review = require("../models").review;
const Recipes = require("../models").recipe;

//Get all the chefs
router.get("/", async (req, res, next) => {
  try {
    const getChefs = await Chef.findAll();
    res.status(200).send(getChefs);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Get one specific chef by primary key
router.get("/detailChef/:id", async (req, res, next) => {
  try {
    const chefId = parseInt(req.params.id);
    if (!chefId) {
      res.status(404).send(`${chefId} not found!`);
    } else {
      const getChef = await Chef.findByPk(chefId, {
        include: [{ model: Type }, { model: Review }, { model: Recipes }],
      });
      res.status(200).send(getChef);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Create one specific  reviews if you are the user to the specific chef by primary key
router.post(
  "/detailChef/:id/createReview",
  authMiddleware,
  async (req, res, next) => {
    try {
      const chefId = parseInt(req.params.id);
      if (!chefId) {
        res.status(404).send(`${chefId} not found!`);
      }
      const user = req.user;
      if (!user) {
        res.status(401).send("You are not authorized!");
      }
      const { name, content, rating } = req.body;
      if (!name || !content || !rating) {
        res.status(400).send("You need to write a name, content and rating!");
      }

      const newReview = await Review.create({
        name,
        content,
        rating,
        chefid: chefId,
        userid: user.id,
      });

      res.status(200).send(newReview);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

//Update likes in recipe
router.patch("/recipe/:id", async (req, res, next) => {
  try {
    const recipeId = parseInt(req.params.id);
    const recipe = await Recipes.findByPk(recipeId);
    if (!recipe) {
      res.status(404).send("Recipe not found!");
    } else {
      const { likes } = req.body;
      const updateLikes = await recipe.update({ likes });
      res.status(200).send(updateLikes);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Get all the chefs and recipes for the community page
router.get("/community", async (req, res, next) => {
  try {
    const getChefs = await Chef.findAll({ include: [Recipes] });
    res.status(200).send(getChefs);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
