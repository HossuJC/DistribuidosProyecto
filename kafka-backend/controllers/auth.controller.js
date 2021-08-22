const Usuario = require('../database/models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
  const contrasena = bcrypt.hashSync(req.body.contrasena, 10);
  Usuario.create({
    nombre_usuario: req.body.nombre_usuario,
    correo: req.body.correo,
    contrasena: contrasena,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fecha_nacimiento: req.body.fecha_nacimiento,
    pais: req.body.pais,
    rol: req.body.rol,
  })
      .then((usuario) => {
        const token = jwt.sign({usuario: usuario}, 'laweasecreta', {
          expiresIn: '7d',
        });
        res.json({
          usuario: usuario,
          token: token,
        });
      })
      .catch((err) => {
        console.log('error: ' + err);
        // res.json(err);
      });
};

exports.iniciarSesion = async (req, res) => {
  Usuario.findOne({
    where: {correo: req.body.correo},
    attributes: ['id', 'contrasena', 'rol', 'activo'],
    // attributes: { exclude: ["contrasena"] },
  })
      .then((usuario) => {
        if (!usuario) {
          res.status(404).json({
            msg: 'El correo proporcionado no ha sido registrado.',
          });
        } else {
          if (
            bcrypt.compareSync(req.body.contrasena, usuario.contrasena)
          ) {
            const token = jwt.sign({usuario: usuario}, 'laweasecreta', {
              expiresIn: '7d',
            });
            res.json({
              usuario: {
                id: usuario.id,
                rol: usuario.rol,
                activo: usuario.activo,
              },
              token: token,
            });
          } else {
            res.status(401).json({
              msg: 'La contraseña proporcionada no es correcta',
            });
          }
        }
      })
      .catch((err) => {
        console.log('error: ' + err);
        // res.json(err);
      });
};
