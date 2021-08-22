const Suscripcion = require('../database/models/Suscripcion');

exports.createSuscripcion = async (req, res) => {
  Suscripcion.create({
    usuario: req.body.usuario,
    plan: req.body.plan,
    fecha_fin: req.body.fecha_fin,
  })
      .then((suscripcion) => {
        res.json(suscripcion);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllSuscripciones = async (req, res) => {
  Suscripcion.findAll()
      .then((suscripciones) => {
        res.json(suscripciones);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSuscripcionById = async (req, res) => {
  Suscripcion.findByPk(req.params.id)
      .then((suscripcion) => {
        res.json(suscripcion);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSuscripcionesByUsuario = async (req, res) => {
  Suscripcion.findAll({
    where: {usuario: req.params.usuario},
  })
      .then((suscripciones) => {
        res.json(suscripciones);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSuscripcionesByUsuarioEstado = async (req, res) => {
  Suscripcion.findAll({
    where: {
      usuario: req.params.usuario,
      estado: req.body.estado,
    },
  })
      .then((suscripciones) => {
        res.json(suscripciones);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSuscripcionesByPlan = async (req, res) => {
  Suscripcion.findAll({
    where: {plan: req.params.plan},
  })
      .then((suscripciones) => {
        res.json(suscripciones);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSuscripcionesByPlanEstado = async (req, res) => {
  Suscripcion.findAll({
    where: {
      plan: req.params.plan,
      estado: req.body.estado,
    },
  })
      .then((suscripciones) => {
        res.json(suscripciones);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updateSuscripcion = async (req, res) => {
  Suscripcion.update(
      {
        plan: req.body.plan,
        activo: req.body.activo,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
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

exports.deleteSuscripcion = async (req, res) => {
  Suscripcion.destroy({
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
