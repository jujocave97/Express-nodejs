const express = require('express');
const cors = require('cors');
const routerApi = require('./routes'); // carpeta donde estan todas las rutas

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

const app = express();
const port = 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080','https://myapp.com'];
const options = {
  origin: (origin, cb) => {
    if(whiteList.includes(origin)){
      cb(null, true);
    }else{
      cb(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

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


