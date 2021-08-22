const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class SolicitudVerificacion extends Model {}
SolicitudVerificacion.init(
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      verificador: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      usuario: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        unique: true,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      estado: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '1',
      },
      fecha_verificacion: {
        type: Sequelize.DATE,
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
      modelName: 'solicitud_verificacion',
      freezeTableName: true,
      timestamps: false,
    },
);

SolicitudVerificacion.associate = (db) => {};
module.exports = SolicitudVerificacion;
