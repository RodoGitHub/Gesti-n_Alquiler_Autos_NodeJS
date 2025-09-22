'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    marcaId: DataTypes.INTEGER,
    modelo: DataTypes.STRING,
    anio: DataTypes.INTEGER,
    precio_dia: DataTypes.DECIMAL,
    disponible: DataTypes.BOOLEAN,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};