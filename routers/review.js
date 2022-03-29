const { Router } = require("express");
const router = new Router();

//models
const Review = require("../models").review;

//Get all the reviews
router.get("/", async (req, res, next) => {
  try {
    const getReviews = await Review.findAll();
    res.status(200).send(getReviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
