const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/Biblioteca.controller');

router.post('/', controller.createBiblioteca);
router.get('/', controller.getAllBibliotecas);
router.get('/:id', controller.getBibliotecaById);
router.get('/usuario/:usuarioId', controller.getBibliotecasByUsuario);
router.patch('/:id', controller.updateBiblioteca);
router.delete('/:id', controller.deleteBiblioteca);

module.exports = router;
