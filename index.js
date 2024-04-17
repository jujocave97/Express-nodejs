const express = require('express');
const cors = require('cors');
const routerApi = require('./routes'); // carpeta donde estan todas las rutas

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // habilitamos a cualquier dominio

app.get('/', (req, res) => {
    res.send('Hola mi primer server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,() => {
  console.log('Puerto '+port);
});


