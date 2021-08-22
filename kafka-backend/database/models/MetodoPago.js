const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class MetodoPago extends Model {}
MetodoPago.init(
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
      tipo: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      fecha_modificaicon: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      sequelize,
      modelName: 'metodo_pago',
      freezeTableName: true,
      timestamps: false,
    },
);

MetodoPago.associate = (db) => {};
module.exports = MetodoPago;
