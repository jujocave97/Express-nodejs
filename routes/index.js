const productsRoute = require('./productsRoute');
//const usersRoute = require('./usersRoute');
//const usersRoute = require('/categoriesRoute');

function routerApi(app) {
  app.use('/products', productsRoute);
  //app.use('/users', usersRoute);
 // app.use('/categories', categoriesRoute);
}


module.exports = routerApi;
