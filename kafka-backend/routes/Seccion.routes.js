const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/Seccion.controller');

router.post('/', controller.createSeccion);
router.get('/', controller.getAllSecciones);
router.get('/:id', controller.getSeccionById);
router.get('/obra/:obra', controller.getSeccionesByObra);
router.patch('/:id', controller.updateSeccion);
router.delete('/:id', controller.deleteSeccion);

module.exports = router;
