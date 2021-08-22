const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Biblioteca extends Model {}
Biblioteca.init(
    {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      usuarioId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      obraId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'obra',
          key: 'id',
        },
      },
      oculto: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
      },
      favorito: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
      },
      leido: {
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
      modelName: 'biblioteca',
      freezeTableName: true,
      timestamps: false,
    },
);

Biblioteca.associate = (db) => {};
module.exports = Biblioteca;
