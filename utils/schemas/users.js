const joi = require("joi")

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)

const creatUserSchema = {
  name: joi.string().max(100).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  isAdmin: joi.boolean(),
}

module.exports = {
  userIdSchema,
  creatUserSchema,
}
