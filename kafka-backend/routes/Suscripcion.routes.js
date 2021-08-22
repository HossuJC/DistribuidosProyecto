const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/Suscripcion.controller');

router.post('/', controller.createSuscripcion);
router.get('/', controller.getAllSuscripciones);
router.get('/:id', controller.getSuscripcionById);
router.get('/usuario/:usuario', controller.getSuscripcionesByUsuario);
router.get('/usuario/:usuario/:estado', controller.getSuscripcionesByUsuarioEstado);
router.get('/plan/:plan', controller.getSuscripcionesByPlan);
router.get('/plan/:plan/:estado', controller.getSuscripcionesByPlanEstado);
router.patch('/:id', controller.updateSuscripcion);
router.delete('/:id', controller.deleteSuscripcion);

module.exports = router;
