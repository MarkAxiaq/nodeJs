const Joi = require("joi");
const mongoose = require('mongoose');

// A Joi schema defines the shape of our Objects. What properties do we have? What's their type, min or max length etc...
const runnersSchema = {
    name: Joi.string().min(3).max(30).required(),
    age: Joi.number().min(4).required(),
    runnerType: Joi.string().required()
  };

let Schema = mongoose.Schema;
let runnerModel = new Schema({
    name: {type: String},
    age: {type: Number},
    runnerType: {type: String},
    worldRecord: {type: Boolean, default: false}
});

module.exports = {
    runnerModel: mongoose.model('Runner', runnerModel),
    runnerSchema : runnersSchema
};