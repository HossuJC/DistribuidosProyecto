const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Genero extends Model {}
Genero.init(
    {
      id: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'genero',
      freezeTableName: true,
      timestamps: false,
    },
);

Genero.associate = (db) => {};
module.exports = Genero;
