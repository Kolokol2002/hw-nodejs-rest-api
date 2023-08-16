const { HttpError } = require("../helpers/HttpError");

const validationBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    next();
  };
  return func;
};

module.exports = {
  validationBody,
};
