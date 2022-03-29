const { Router } = require("express");
const router = new Router();

//models

const Type = require("../models").type;

//Get all the types
router.get("/", async (req, res, next) => {
  try {
    const getTypes = await Type.findAll();
    res.status(200).send(getTypes);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
