const SolicitudVerificacion = require('../database/models/SolicitudVerificacion');

exports.createSolicitudVerificacion = async (req, res) => {
  SolicitudVerificacion.create({
    verificador: req.body.verificador,
    usuario: req.body.usuario,
  })
      .then((solicitud_verificacion) => {
        res.json(solicitud_verificacion);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllSolicitudesVerificacion = async (req, res) => {
  SolicitudVerificacion.findAll()
      .then((solicitudes_verificacion) => {
        res.json(solicitudes_verificacion);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSolicitudVerificacionById = async (req, res) => {
  SolicitudVerificacion.findByPk(req.params.id)
      .then((solicitud_verificacion) => {
        res.json(solicitud_verificacion);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSolicitudesVerificacionByVerificador = async (req, res) => {
  SolicitudVerificacion.findAll({
    where: {verificador: req.params.verificador},
  })
      .then((solicitudes_verificacion) => {
        res.json(solicitudes_verificacion);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getSolicitudVerificacionByUsuario = async (req, res) => {
  SolicitudVerificacion.findAll({
    where: {usuario: req.params.usuario},
  })
      .then((solicitud_verificacion) => {
        res.json(solicitud_verificacion);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updateSolicitudVerificacion = async (req, res) => {
  SolicitudVerificacion.update(
      {
        verificador: req.body.verificador,
        estado: req.body.estado,
        fecha_verificacion: req.body.fecha_verificacion,
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

exports.deleteSolicitudVerificacion = async (req, res) => {
  SolicitudVerificacion.destroy({
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
