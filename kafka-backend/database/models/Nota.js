const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Nota extends Model {}
Nota.init(
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
      referencia: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      texto: {
        type: Sequelize.STRING(500),
        allowNull: true,
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
      modelName: 'nota',
      freezeTableName: true,
      timestamps: false,
    },
);

Nota.associate = (db) => {};
module.exports = Nota;
