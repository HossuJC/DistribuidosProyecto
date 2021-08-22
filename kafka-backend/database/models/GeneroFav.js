const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class GeneroFav extends Model {}
GeneroFav.init(
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
      genero: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        references: {
          model: 'genero',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'genero_fav',
      freezeTableName: true,
      timestamps: false,
    },
);

GeneroFav.associate = (db) => {};
module.exports = GeneroFav;
