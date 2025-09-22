'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    static associate(models) {
      // Cada alquiler pertenece a un auto y a un cliente
      Rental.belongsTo(models.Car, { foreignKey: 'id_auto' });
      Rental.belongsTo(models.Client, { foreignKey: 'id_cliente' });
    }
  }

  Rental.init({
    id_auto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('pendiente','activo','finalizado','cancelado')
    },
    metodo_pago: {
      type: DataTypes.ENUM('efectivo','tarjeta','transferencia')
    }
  }, {
    sequelize,
    modelName: 'Rental',
    tableName: 'rentals',
    timestamps: true
  });

  return Rental;
};
