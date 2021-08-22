const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Plan extends Model {}
Plan.init(
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      escritor: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      nombre: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      precio: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      adelantos: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      exclusivo: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      comunidad: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      colaboracion: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      otros: {
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
      modelName: 'plan',
      freezeTableName: true,
      timestamps: false,
    },
);

Plan.associate = (db) => {};
module.exports = Plan;
