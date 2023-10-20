const mongoose = require('mongoose')

//generating web tokens for user authentication and authorization
const jwt = require('jsonwebtoken')

//validation
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

//Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
})

//generate a jwt token for a user
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPVTKEY, {
    expiresIn: '7d',
  })
  return token
}

//model
const User = mongoose.model('user', userSchema)

//validate data before saving to the database
const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label('First Name'),
    lastName: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    password: passwordComplexity().required().label('Password'),
  })
  return schema.validate(data)
}

module.exports = { User, validate }
