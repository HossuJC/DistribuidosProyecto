const Obra = require('../database/models/Obra');
const Usuario = require('../database/models/Usuario');

exports.createObra = async (req, res) => {
  Obra.create({
    titulo: req.body.titulo,
    portada: req.body.portada,
    escritor: req.body.escritor,
    sinopsis: req.body.sinopsis,
    adulto: req.body.adulto,
    exclusivo: req.body.exclusivo,
    anio_publicacion: req.body.anio_publicacion,
  })
      .then((obra) => {
        res.json(obra);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getAllObras = async (req, res) => {
  Obra.findAll({
    include: [{ 
      model: Usuario,
      attributes: ['nombre', 'apellido'],
    }]
  })
      .then((obras) => {
        res.json(obras);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getObraById = async (req, res) => {
  Obra.findByPk(req.params.id)
      .then((obra) => {
        res.json(obra);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.getObrasByEscritor = async (req, res) => {
  Obra.findAll({
    where: {escritor: req.params.escritor},
    include: [{ 
      model: Usuario,
      attributes: ['nombre', 'apellido'],
    }]
  })
      .then((obras) => {
        res.json(obras);
      })
      .catch((err) => {
        console.log('error: ' + err);
        res.json(err);
      });
};

exports.updateObra = async (req, res) => {
  Obra.update(
      {
        titulo: req.body.titulo,
        portada: req.body.portada,
        sinopsis: req.body.sinopsis,
        adulto: req.body.adulto,
        estado: req.body.estado,
        exclusivo: req.body.exclusivo,
        anio_publicacion: req.body.anio_publicacion,
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

exports.deleteObra = async (req, res) => {
  Obra.destroy({
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
