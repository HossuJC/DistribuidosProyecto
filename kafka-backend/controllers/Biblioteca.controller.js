const Biblioteca = require('../database/models/Biblioteca');
const Obra = require('../database/models/Obra');
const Usuario = require('../database/models/Usuario');

exports.createBiblioteca = async (req, res) => {
  Biblioteca.create({
    usuarioId: req.body.usuarioId,
    obraId: req.body.obraId,
  })
      .then((biblioteca) => {
        res.json(biblioteca);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllBibliotecas = async (req, res) => {
  Biblioteca.findAll()
      .then((bibliotecas) => {
        res.json(bibliotecas);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getBibliotecaById = async (req, res) => {
  Biblioteca.findByPk(req.params.id)
      .then((biblioteca) => {
        res.json(biblioteca);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getBibliotecasByUsuario = async (req, res) => {
  Biblioteca.findAll({
    where: {usuarioId: req.params.usuarioId},
    include: [{ 
      model: Obra,
      attributes: ['titulo', 'portada'],
      include: [{
        model: Usuario,
        attributes: ['id', 'nombre', 'apellido', 'foto']
      }]
    }]
  })
      .then((bibliotecas) => {
        res.json(bibliotecas);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updateBiblioteca = async (req, res) => {
  Biblioteca.update(
      {
        oculto: req.body.oculto,
        favorito: req.body.favorito,
        leido: req.params.leido,
      },
      {
        where: {id: req.params.id},
      },
  )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.deleteBiblioteca = async (req, res) => {
  Biblioteca.destroy({
    where: {id: req.params.id},
  })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};
