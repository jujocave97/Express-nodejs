const express = require('express');
const routerApi = require('./routes'); // carpeta donde estan todas las rutas


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola mi primer server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.listen(port,() => {
  console.log('Puerto '+port);
});

routerApi(app);

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//       categoryId,
//       productId
//   });
// });

// // parametros query
// app.get('/users', (req, res) => {  // localhost:3000/users?limit=10&offset=300
//   const { limit, offset } = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     });
//   }else {
//     res.send('No hay parametros');
//   }
// });


