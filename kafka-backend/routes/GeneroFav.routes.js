const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/GeneroFav.controller');

router.post('/', controller.createGeneroFav);
router.get('/', controller.getAllGenerosFav);
router.get('/:id', controller.getGeneroFavById);
router.get('/usuario/:usuario', controller.getGenerosFavByUsuario);
router.get('/genero/:genero', controller.getGenerosFavByGenero);
router.delete('/:id', controller.deleteGeneroFav);

module.exports = router;
