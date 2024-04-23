const express = require('express');

const productsRoute = require('./productsRoute');
const usersRoute = require('./usersRoute');
const customerRoute = require('./customerRoute');
const categoriesRoute = require('./categorisRoute');
const orderRoute = require('./ordersRoute');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRoute);
  router.use('/users', usersRoute);
  router.use('/customer', customerRoute);
  router.use('/orders', orderRoute);
  router.use('/categories', categoriesRoute);
}


module.exports = routerApi;
