const joi = require('joi');

const addItemValidation = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
});

module.exports = addItemValidation;
