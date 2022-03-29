const { Router } = require("express");
const router = new Router();
const nodemailer = require("nodemailer");

//models
const Bookings = require("../models").booking;
const Chef = require("../models").chef;
const User = require("../models").user;
const Messages = require("../models").message;
const authMiddlewareChef = require("../auth/middlewareAuthChef");

//Create a new booking
router.post("/detailChef/:id/booking", async (req, res, next) => {
  try {
    const chefId = parseInt(req.params.id);
    const findChefById = await Chef.findByPk(chefId);
    if (!findChefById) {
      return res.status(404).send("Chef id not found!");
    }
    const {
      dateString,
      startTimeString,
      endTimeString,
      name,
      email,
      phone,
      informations,
      userId,
    } = req.body;
    if (
      !dateString ||
      !startTimeString ||
      !endTimeString ||
      !name ||
      !email ||
      !phone
    ) {
      res
        .status(400)
        .send(
          "You need to insert dates, start time, end time, name, email and phone"
        );
    }

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

    const createBooking = await Bookings.create({
      dates: dateString,
      sTime: startTimeString,
      eTime: endTimeString,
      name,
      email,
      phone,
      informations,
      chefId: chefId,
      userBookingId: userId,
    });
    console.log("I'm getting here", email);
    const emailTemplate = {
      from: "makda1012@hotmail.com", // sender address
      to: email, // list of receivers
      subject: "Hello from Sweet Harmony!", // Subject line
      text: "Hello from Sweet Harmony!", // plain text body
      html: `<h1>Your bookings is on the way, wait the chef for the confirmation!</h1><h3>Booking dates:<br/>${createBooking.dates}<br /></h3>`, // html body
    };

    transporter.sendMail(emailTemplate, (error) => {
      if (error) {
        console.log("error send email", error);
      } else {
        console.log("Message sent: %s");
      }
    });
    res.status(200).send(createBooking);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Get from booking messages available
router.get("/booking/:id/messages", async (req, res, next) => {
  try {
    const booking = parseInt(req.params.id);
    const getMessages = await Messages.findAll({
      where: { bookingId: booking },
      include: [{ model: User }, { model: Chef }],
    });
    res.status(200).send(getMessages);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//create message
router.post("/booking/:id/messages/create", async (req, res, next) => {
  try {
    const booking = parseInt(req.params.id);
    const { message, chefId, userId } = req.body;
    if (!message) {
      res.status(404).send("You need to fill the message!");
    }
    const createMessage = await Messages.create({
      bookingId: booking,
      message: message,
      chefId: chefId,
      userId: userId,
    });
    res.status(200).send(createMessage);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
