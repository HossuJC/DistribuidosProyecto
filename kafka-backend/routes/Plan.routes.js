const express = require('express');
const {Router} = require('express');
const router = Router();
const controller = require('../controllers/Plan.controller');

router.post('/', controller.createPlan);
router.get('/', controller.getAllPlanes);
router.get('/:id', controller.getPlanById);
router.get('/escritor/:escritor', controller.getPlanesByEscritor);
router.patch('/:id', controller.updatePlan);
router.delete('/:id', controller.deletePlan);

module.exports = router;
