const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAILTRAP_USER, MAILTRAP_PASS } = process.env;

// mailTrap
// const transport = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: MAILTRAP_USER,
//     pass: MAILTRAP_PASS,
//   },
// });

const transport = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASS,
  },
});

const sendEmail = (message) => {
  message.from = "contacts_rest_api@meta.ua";

  return transport.sendMail(message);
};

module.exports = sendEmail;
