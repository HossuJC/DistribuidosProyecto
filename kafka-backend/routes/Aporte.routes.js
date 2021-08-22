const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/Aporte.controller');

router.post('/', controller.createAporte);
router.get('/', controller.getAllAportes);
router.get('/:id', controller.getAporteById);
router.get('/usuario/:usuario', controller.getAportesByUsuario);
router.get('/seccion/:seccion', controller.getAportesBySeccion);
router.patch('/:id', controller.updateAporte);
router.delete('/:id', controller.deleteAporte);

module.exports = router;
