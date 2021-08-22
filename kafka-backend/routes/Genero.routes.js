const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/Genero.controller');

router.get('/', controller.getAllGeneros);
router.get('/:id', controller.getGeneroById);

module.exports = router;
