const Aporte = require('../database/models/Aporte');

exports.createAporte = async (req, res) => {
  Aporte.create({
    usuario: req.body.usuario,
    seccion: req.body.seccion,
  })
      .then((aporte) => {
        res.json(aporte);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllAportes = async (req, res) => {
  Aporte.findAll()
      .then((aportes) => {
        res.json(aportes);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAporteById = async (req, res) => {
  Aporte.findByPk(req.params.id)
      .then((aporte) => {
        res.json(aporte);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAportesByUsuario = async (req, res) => {
  Aporte.findAll({
    where: {usuario: req.params.usuario},
  })
      .then((aportes) => {
        res.json(aportes);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAportesBySeccion = async (req, res) => {
  Aporte.findAll({
    where: {seccion: req.params.seccion},
  })
      .then((aportes) => {
        res.json(aportes);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updateAporte = async (req, res) => {
  Aporte.update(
      {
        contenido: req.body.contenido,
        seleccionado: req.body.seleccionado,
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

exports.deleteAporte = async (req, res) => {
  Aporte.destroy({
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
