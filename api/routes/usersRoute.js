const UserService = require('./../services/userServices');
const express = require ('express');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
      const users = await service.find();
      res.json(users);
  }catch (error){
      next(error);
  }
});

module.exports = router;
