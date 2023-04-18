const { json } = require('body-parser');
const express = require('express');
const router = express.Router()
const { getAllOils, getOneOilByName, getOilBySymptom, getOilByTheme, getOilByDiffusion, createOil, updateOil } = require('../controllers/oilsController');

// GET /api/oils
// Récupérer tous les huiles
router.get('/', getAllOils);

// GET /api/oils/:name
// Récupérer une huile par son name
router.get('/:oil', getOneOilByName);

// GET /api/oils/symptoms/:symptom
// Récupérer les huiles selon un symptôme
router.get('/symptoms/:name', getOilBySymptom);

// GET /api/oils/themes/:theme
// Récupérer les huiles selon un theme
router.get('/themes/:theme', getOilByTheme);

// GET /api/oils/themes/:diffusion
// Récupérer les huiles selon sa diffusion
router.get('/diffusions/:name', getOilByDiffusion);

// POST /api/oils/
router.post('/', createOil); 

// PUT /api/oils/:id
// Mettre à jour une huile par son id
router.put('/:id', updateOil);

module.exports = router 
