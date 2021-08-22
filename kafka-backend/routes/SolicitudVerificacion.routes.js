const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/SolicitudVerificacion.controller');

router.post('/', controller.createSolicitudVerificacion);
router.get('/', controller.getAllSolicitudesVerificacion);
router.get('/:id', controller.getSolicitudVerificacionById);
router.get('/verificador/:verificador', controller.getSolicitudesVerificacionByVerificador);
router.get('/usuario/:usuario', controller.getSolicitudVerificacionByUsuario);
router.patch('/:id', controller.updateSolicitudVerificacion);
router.delete('/:id', controller.deleteSolicitudVerificacion);

module.exports = router;
