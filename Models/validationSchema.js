const joi = require("joi")

const userjoiSchema = joi.object({
    name: joi.string(),
    email: joi.string().email().required(),
    username: joi.string().alphanum().min(3).max(30),
    password: joi.string().required(),
});

const Joi = require('joi');

const musicJoiSchema = Joi.object({
    name: Joi.string(),
    image: Joi.string(),
    category: Joi.string(),
    description: Joi.string(),
    artist: Joi.string(), 
    song: Joi.string(),    
});



module.exports = { userjoiSchema, musicJoiSchema };
