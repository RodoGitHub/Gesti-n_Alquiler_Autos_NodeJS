'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_auto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cars', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'clients', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      fecha_inicio: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      fecha_fin: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      total: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      estado: {
        type: Sequelize.ENUM('pendiente','activo','finalizado','cancelado')
      },
      metodo_pago: {
        type: Sequelize.ENUM('efectivo','tarjeta','transferencia')
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rentals');
  }
};
