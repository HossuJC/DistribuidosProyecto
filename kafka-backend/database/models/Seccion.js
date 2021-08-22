const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Seccion extends Model {}
Seccion.init(
    {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      obra: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'obra',
          key: 'id',
        },
      },
      titulo: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      orden: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
      },
      contenido: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      estado: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '1',
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
      modelName: 'seccion',
      freezeTableName: true,
      timestamps: false,
    },
);

Seccion.associate = (db) => {};
module.exports = Seccion;
