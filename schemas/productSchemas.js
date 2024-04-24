const Joi = require('joi');

const id = Joi.string().id();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image= Joi.string().uri();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const priceMin = Joi.number().integer().min(10);
const priceMax = Joi.number().integer().max(110);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  image: image
});

const getProductSchema= Joi.object({
  id: id.required()
});

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  priceMin,
  priceMax: priceMax.when('priceMin', {
    is: Joi.number().integer(),
    then: Joi.required()
  })
});


module.exports = { createProductSchema, updateProductSchema, getProductSchema}
