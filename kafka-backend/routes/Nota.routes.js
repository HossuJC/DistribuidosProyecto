const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/Nota.controller');

router.post('/', controller.createNota);
router.get('/', controller.getAllNotas);
router.get('/:id', controller.getNotaById);
router.get('/usuario/:usuario', controller.getNotasByUsuario);
router.get('/usuario/:usuario/:seccion', controller.getNotasByUsuarioSeccion);
router.patch('/:id', controller.updateNota);
router.delete('/:id', controller.deleteNota);

module.exports = router;
