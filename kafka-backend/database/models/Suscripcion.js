const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Suscripcion extends Model {}
Suscripcion.init(
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      usuario: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      plan: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'plan',
          key: 'id',
        },
      },
      activo: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '1',
      },
      fecha_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      fecha_fin: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      fecha_modificacion: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      sequelize,
      modelName: 'suscripcion',
      freezeTableName: true,
      timestamps: false,
    },
);

Suscripcion.associate = (db) => {};
module.exports = Suscripcion;
