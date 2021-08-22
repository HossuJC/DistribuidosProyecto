const MetodoPago = require('../database/models/MetodoPago');

exports.createMetodoPago = async (req, res) => {
  MetodoPago.create({
    usuario: req.body.usuario,
    tipo: req.body.tipo,
  })
      .then((metodo_pago) => {
        res.json(metodo_pago);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllMetodosPago = async (req, res) => {
  MetodoPago.findAll()
      .then((metodos_pago) => {
        res.json(metodos_pago);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getMetodoPagoById = async (req, res) => {
  MetodoPago.findByPk(req.params.id)
      .then((metodo_pago) => {
        res.json(metodo_pago);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getMetodosPagoByUsuario = async (req, res) => {
  MetodoPago.findAll({
    where: {usuario: req.params.usuario},
  })
      .then((metodos_pago) => {
        res.json(metodos_pago);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updateMetodoPago = async (req, res) => {
  MetodoPago.update(
      {
        tipo: req.body.tipo,
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

exports.deleteMetodoPago = async (req, res) => {
  MetodoPago.destroy({
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
