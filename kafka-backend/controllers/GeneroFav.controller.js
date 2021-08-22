const GeneroFav = require('../database/models/GeneroFav');

exports.createGeneroFav = async (req, res) => {
  GeneroFav.create({
    usuario: req.body.usuario,
    genero: req.body.genero,
  })
      .then((genero_fav) => {
        res.json(genero_fav);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllGenerosFav = async (req, res) => {
  GeneroFav.findAll()
      .then((generos_fav) => {
        res.json(generos_fav);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getGeneroFavById = async (req, res) => {
  GeneroFav.findByPk(req.params.id)
      .then((genero_fav) => {
        res.json(genero_fav);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getGenerosFavByUsuario = async (req, res) => {
  GeneroFav.findAll({
    where: {usuario: req.params.usuario},
  })
      .then((generos_fav) => {
        res.json(generos_fav);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getGenerosFavByGenero = async (req, res) => {
  GeneroFav.findAll({
    where: {genero: req.params.genero},
  })
      .then((generos_fav) => {
        res.json(generos_fav);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.deleteGeneroFav = async (req, res) => {
  GeneroFav.destroy({
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
