const { Model, DataTypes, Sequelize} = require ('sequelize');

const USER_TABLE = 'users';

const UserSchema = { // este schema define la estructura de la db
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    Unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {  // este modelo tiene todas las formas de hacer querys
  static associate (models) {
    this.hasOne(models.Customer, {
      as: 'Customer',
      foreignKey: 'userId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timeStamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User};
