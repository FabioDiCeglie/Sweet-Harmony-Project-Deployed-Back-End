const { Router } = require("express");
const { send } = require("express/lib/response");
const router = new Router();
const authMiddleware = require("../auth/middleware");

//models
const Chef = require("../models").chef;
const Type = require("../models").type;
const Review = require("../models").review;
const Recipes = require("../models").recipe;

//Get all the chefs and recipes for the community page
router.get("/", async (req, res, next) => {
  try {
    const getRecipes = await Recipes.findAll({ include: [Chef] });
    res.status(200).send(getRecipes);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
