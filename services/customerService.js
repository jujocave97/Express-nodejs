const boom = require('@hapi/boom');
const { models } = require('./../lib/sequelize');

class CustomerService {
  constructor() {}

  async find() {
    const rta = await models.Customer.findAll({
      include: ['user']
    });
    return rta;
  }

  async findOne() {
    const customer= await models.Customer.findByPk(id);
    if(!customer){
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async create(data) {
    const newCustumer = await models.Customer.create(data);
    return newCustumer;
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
