const express = require ('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const usuarios = [];
  const { size } = req.query;
  const limit = size || 10;
  for ( let i = 0 ; i <  limit; i++){
    usuarios.push({
      name: faker.person.fullName(),
      city: faker.person.zodiacSign(),
      age: parseInt(faker.person.age),
    });
  }
  res.json(usuarios);
});

module.exports = router;
