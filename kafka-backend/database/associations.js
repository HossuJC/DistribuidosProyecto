const Obra = require('./models/Obra');
const Usuario = require('./models/Usuario');
const Biblioteca = require('./models/Biblioteca');

Obra.belongsTo(Usuario, {
    foreignKey: 'escritor'
});
Usuario.hasMany(Obra, {
    foreignKey: 'escritor'
});


Biblioteca.belongsTo(Obra, {
    foreignKey: 'obraId'
});
Obra.hasMany(Biblioteca, {
    foreignKey: 'obraId'
});


/*
Usuario.belongsToMany(Obra, {through: "biblioteca"});
Obra.belongsToMany(Usuario, {through: "biblioteca"});*/