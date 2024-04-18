const boom=require('@hapi/boom');

const pool = require('../lib/postgresPool');

class UserService{
  constructor(){
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async create(data){
    return data;
  }

  async find(){
    const rta=await this.pool.query('SELECT * FROM task');
    return rta.rows;
  }
  async findOne(id){
    return{id};
  }
  async update(id,changes){
    return{id,changes,};
  }
  async delete(id){
    return{id};
  }
}
module.exports=UserService;
