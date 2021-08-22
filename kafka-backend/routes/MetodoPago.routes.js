const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/MetodoPago.controller');

router.post('/', controller.createMetodoPago);
router.get('/', controller.getAllMetodosPago);
router.get('/:id', controller.getMetodoPagoById);
router.get('/usuario/:usuario', controller.getMetodosPagoByUsuario);
router.patch('/:id', controller.updateMetodoPago);
router.delete('/:id', controller.deleteMetodoPago);

module.exports = router;
