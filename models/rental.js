'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rental.init({
    carId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    estado: DataTypes.STRING,
    metodo_pago: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};