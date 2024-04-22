const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {
  constructor() {}

  async find() {
    const rta = await models.Customer.findAll();
    return rta;
  }

  async findOne() {
    const user= await models.Customer.findByPk(id);
    if(!user){
      throw boom.notFound('customer not found');
    }
    return user;
  }

  async create(data) {
    return data;
  }

  async update(id, changes) {
    const model = await this.findOne;
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id){
    const model= await this.findOne(id);
    await model.destroy();
    return { rta:true};
  }
}


module.exports = CustomerService;
