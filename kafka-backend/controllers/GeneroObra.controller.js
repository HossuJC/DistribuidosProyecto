const GeneroObra = require('../database/models/GeneroObra');

exports.createGeneroObra = async (req, res) => {
  GeneroObra.create({
    obra: req.body.obra,
    genero: req.body.genero,
  })
      .then((genero_obra) => {
        res.json(genero_obra);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllGenerosObra = async (req, res) => {
  GeneroObra.findAll()
      .then((generos_obra) => {
        res.json(generos_obra);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getGeneroObraById = async (req, res) => {
  GeneroObra.findByPk(req.params.id)
      .then((genero_obra) => {
        res.json(genero_obra);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getGenerosObraByObra = async (req, res) => {
  GeneroObra.findAll({
    where: {obra: req.params.obra},
  })
      .then((generos_obra) => {
        res.json(generos_obra);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getGenerosObraByGenero = async (req, res) => {
  GeneroObra.findAll({
    where: {genero: req.params.genero},
  })
      .then((generos_obra) => {
        res.json(generos_obra);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.deleteGeneroObra = async (req, res) => {
  GeneroObra.destroy({
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
