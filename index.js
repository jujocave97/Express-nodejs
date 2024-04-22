const express = require('express');
const cors = require('cors');
const routerApi = require('./routes'); // carpeta donde estan todas las rutas

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler')

const app = express();
const port =process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080','https://myapp.com'];
const options = {
  origin: (origin, cb) => {
    if(whiteList.includes(origin) || !origin){
      cb(null, true);
    }else{
      cb(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get('/api', (req, res) => {
    res.send('Hola mi primer server en express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,() => {
  console.log('Puerto '+port);
});


