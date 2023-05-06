const { json } = require('body-parser');
const express = require('express');
const router = express.Router()
const { getAllOils, getOneOilByName, getOilBySymptom, getOilByTheme, getOilByDiffusion, searchOilByKeyword } = require('../controllers/oilsController');

// GET /api/oils
// Récupérer tous les huiles
router.get('/', getAllOils);

// GET /api/oils/:name
// Récupérer une huile par son name
router.get('/names/:oil', getOneOilByName);

// GET /api/oils/symptoms/:symptom
// Récupérer les huiles selon un symptôme
router.get('/symptoms/:name', getOilBySymptom);

// GET /api/oils/themes/:theme
// Récupérer les huiles selon un theme
router.get('/themes/:theme', getOilByTheme);

// GET /api/oils/themes/:diffusion
// Récupérer les huiles selon sa diffusion
router.get('/diffusions/:name', getOilByDiffusion);

router.get('/search', searchOilByKeyword);


module.exports = router 
