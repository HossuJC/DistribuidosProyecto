const sequelize = require('../db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Usuario extends Model {}
Usuario.init(
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_usuario: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          len: [5, 25],
        },
      },
      correo: {
        type: Sequelize.STRING(250),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      contrasena: {
        type: Sequelize.STRING(64),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      nombre: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: true,
          isAlpha: true,
        },
      },
      apellido: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: true,
          isAlpha: true,
        },
      },
      seudonimo: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      fecha_nacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      pais: {
        type: Sequelize.STRING(70),
        allowNull: true,
      },
      foto: {
        type: Sequelize.STRING(500),
        allowNull: false,
        defaultValue:
                'https://www.labicok.com/wp-content/uploads/2020/06/default-user-image.png',
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      rol: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '1',
      },
      activo: {
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
      modelName: 'usuario',
      freezeTableName: true,
      timestamps: false,
      /* hooks: {
            afterCreate: (record) => {
                delete record.dataValues.contrasena;
            },
            afterUpdate: (record) => {
                delete record.dataValues.contrasena;
            },
        }*/
    },
);

Usuario.associate = (db) => {};
module.exports = Usuario;
