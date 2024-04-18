const express = require('express');

const productsRoute = require('./productsRoute');
const usersRoute = require('./usersRoute');
//const usersRoute = require('/categoriesRoute');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRoute);
  router.use('/users', usersRoute);
 // router.use('/categories', categoriesRoute);
}


module.exports = routerApi;
