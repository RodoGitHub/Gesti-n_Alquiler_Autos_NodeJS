'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    documento: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};