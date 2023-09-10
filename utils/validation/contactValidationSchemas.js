const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const changeFavotiteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { addSchema, changeFavotiteSchema };
