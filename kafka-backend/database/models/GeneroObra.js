const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class GeneroObra extends Model {}
GeneroObra.init(
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        obra: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "obra",
                key: "id",
            },
        },
        genero: {
            type: Sequelize.INTEGER(3),
            allowNull: false,
            references: {
                model: "genero",
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "genero_obra",
        freezeTableName: true,
        timestamps: false,
    }
);

GeneroObra.associate = (db) => {};
module.exports = GeneroObra;
