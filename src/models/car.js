'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      // Cada auto pertenece a una marca
      Car.belongsTo(models.Brand, { foreignKey: 'id_marca' });

      // Un auto puede tener muchos alquileres
      Car.hasMany(models.Rental, { foreignKey: 'id_auto' });
    }
  }

  Car.init({
    id_marca: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio_dia: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Car',
    tableName: 'cars',
    timestamps: true
  });

  return Car;
};
