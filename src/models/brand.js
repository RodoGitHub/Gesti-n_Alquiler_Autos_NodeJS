'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      // Una marca puede tener muchos autos
      Brand.hasMany(models.Car, { foreignKey: 'id_marca' });
    }
  }

  Brand.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Brand',
    tableName: 'brands',
    timestamps: true
  });

  return Brand;
};
