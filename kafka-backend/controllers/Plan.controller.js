const Plan = require('../database/models/Plan');

exports.createPlan = async (req, res) => {
  Plan.create({
    escritor: req.body.escritor,
    nombre: req.body.nombre,
    precio: req.body.precio,
    descripcion: req.body.descripcion,
    adelantos: req.body.adelantos,
    exclusivo: req.body.exclusivo,
    comunidad: req.body.comunidad,
    colaboracion: req.body.colaboracion,
    otros: req.body.otros,
  })
      .then((plan) => {
        res.json(plan);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllPlanes = async (req, res) => {
  Plan.findAll()
      .then((planes) => {
        res.json(planes);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getPlanById = async (req, res) => {
  Plan.findByPk(req.params.id)
      .then((plan) => {
        res.json(plan);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getPlanesByEscritor = async (req, res) => {
  Plan.findAll({
    where: {escritor: req.params.escritor},
  })
      .then((planes) => {
        res.json(planes);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updatePlan = async (req, res) => {
  Plan.update(
      {
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        adelantos: req.body.adelantos,
        exclusivo: req.body.exclusivo,
        comunidad: req.body.comunidad,
        colaboracion: req.body.colaboracion,
        otros: req.body.otros,
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

exports.deletePlan = async (req, res) => {
  Plan.destroy({
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
