const Seccion = require('../database/models/Seccion');

exports.createSeccion = async (req, res) => {
  console.log(req.body);
  Seccion.create({
    obra: req.body.obra,
    orden: req.body.orden,
  })
      .then((seccion) => {
        res.json(seccion);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllSecciones = async (req, res) => {
  Seccion.findAll()
      .then((secciones) => {
        res.json(secciones);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSeccionById = async (req, res) => {
  Seccion.findByPk(req.params.id)
      .then((seccion) => {
        res.json(seccion);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSeccionesByObra = async (req, res) => {
  Seccion.findAll({
    where: {obra: req.params.obra},
  })
      .then((secciones) => {
        res.json(secciones);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updateSeccion = async (req, res) => {
  Seccion.update(
      {
        titulo: req.body.titulo,
        orden: req.body.orden,
        contenido: req.body.contenido,
        estado: req.body.estado,
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

exports.deleteSeccion = async (req, res) => {
  Seccion.destroy({
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
