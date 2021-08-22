const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Aporte extends Model {}
Aporte.init(
    {
      id: {
        type: Sequelize.BIGINT,
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
      seccion: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'seccion',
          key: 'id',
        },
      },
      contenido: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      seleccionado: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
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
      modelName: 'aporte',
      freezeTableName: true,
      timestamps: false,
    },
);

Aporte.associate = (db) => {};
module.exports = Aporte;
