const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Obra extends Model {}
Obra.init(
    {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: 'Libro sin título',
      },
      portada: {
        type: Sequelize.STRING(500),
        allowNull: false,
        defaultValue: 'https://mrb.imgix.net/assets/default-book.png',
      },
      escritor: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      sinopsis: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      adulto: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
      },
      estado: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '1',
      },
      exclusivo: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
      },
      anio_publicacion: {
        type: 'YEAR(4)',
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
      modelName: 'obra',
      freezeTableName: true,
      timestamps: false,
    },
);

Obra.associate = (db) => {};
module.exports = Obra;
