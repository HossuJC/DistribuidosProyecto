const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/GeneroObra.controller');

router.post('/', controller.createGeneroObra);
router.get('/', controller.getAllGenerosObra);
router.get('/:id', controller.getGeneroObraById);
router.get('/obra/:obra', controller.getGenerosObraByObra);
router.get('/genero/:genero', controller.getGenerosObraByGenero);
router.delete('/:id', controller.deleteGeneroObra);

module.exports = router;
