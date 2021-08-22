const Nota = require('../database/models/Nota');

exports.createNota = async (req, res) => {
  Nota.create({
    usuario: req.body.usuario,
    seccion: req.body.seccion,
    referencia: req.body.referencia,
    texto: req.body.texto,
  })
      .then((nota) => {
        res.json(nota);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllNotas = async (req, res) => {
  Nota.findAll()
      .then((notas) => {
        res.json(notas);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getNotaById = async (req, res) => {
  Nota.findByPk(req.params.id)
      .then((nota) => {
        res.json(nota);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getNotasByUsuario = async (req, res) => {
  Nota.findAll({
    where: {usuario: req.params.usuario},
  })
      .then((notas) => {
        res.json(notas);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getNotasByUsuarioSeccion = async (req, res) => {
  Nota.findAll({
    where: {usuario: req.params.usuario},
    where: {seccion: req.params.seccion},
  })
      .then((notas) => {
        res.json(notas);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updateNota = async (req, res) => {
  Nota.update(
      {
        texto: req.body.texto,
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

exports.deleteNota = async (req, res) => {
  Nota.destroy({
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
