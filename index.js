const express = require("express");
const cors = require("cors");
// Auth middleware: our own code. Checks for the existence of a token in a header called `authentication`.
const authMiddleWare = require("./auth/middleware");
const authChefRouter = require("./routers/authChef");
const chefRouter = require("./routers/chefs");
const typeRouter = require("./routers/type");
const bookingsRouter = require("./routers/booking");
const userRouter = require("./routers/auth");
const reviewRouter = require("./routers/review");
const recipesRouter = require("./routers/recipes");
const eventsRouter = require("./routers/event");
const { PORT } = require("./config/constants");

// Create an express app
const app = express();
app.use(cors());

/**
 * Middlewares
 *
 * It is advisable to configure your middleware before configuring the routes
 * If you configure routes before the middleware, these routes will not use them
 *
 */

// CORS middleware:  * Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default
app.use(corsMiddleWare());

// express.json():be able to read request bodies of JSON requests a.k.a. body-parser
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

/**
 * Routes
 *
 * Define your routes and attach our routers here (now that middlewares are configured)
 */

app.use("/auth", authChefRouter);
app.use("/chefs", chefRouter);
app.use("/types", typeRouter);
app.use("/", bookingsRouter);
app.use("/auth", userRouter);
app.use("/reviews", reviewRouter);
app.use("/recipes", recipesRouter);
app.use("/events", eventsRouter);

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
