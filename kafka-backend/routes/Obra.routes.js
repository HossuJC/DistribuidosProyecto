const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/Obra.controller');

router.post('/', controller.createObra);
router.get('/', controller.getAllObras);
router.get('/:id', controller.getObraById);
router.get('/escritor/:escritor', controller.getObrasByEscritor);
router.patch('/:id', controller.updateObra);
router.delete('/:id', controller.deleteObra);

module.exports = router;
