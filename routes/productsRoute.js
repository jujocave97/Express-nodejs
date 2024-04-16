const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();


router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for ( let i = 0 ; i <  limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter')
});

router.get('/:id', (req, res) => {  // voy a recibir un id, es un parametro
  const { id } = req.params;
  res.json(
    {
      id,  // le pone de id el que pasas por parametro, puede ser 1, 2 o enfdsjkfsj
      name: 'Product 2',
      price: 3000
    }
  );
});


module.exports = router;
