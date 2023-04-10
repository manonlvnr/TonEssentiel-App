const { json } = require('body-parser');
const express = require('express');
const router = express.Router()
const { getAllOils, getOneOilById, getOilBySymptom, createOil, updateOil } = require('../controllers/oilsController');

// GET /api/oils
// Récupérer tous les huiles
router.get('/', getAllOils);

// GET /api/oils/:id
// Récupérer une huile par son id
router.get('/:id', getOneOilById);

// GET /api/oils/symptoms/:symptom
// Récupérer les huiles selon un symptôme
router.get('/symptoms/:name', getOilBySymptom);

// POST /api/oils/
router.post('/', createOil); 

// PUT /api/oils/:id
// Mettre à jour une huile par son id
router.put('/:id', updateOil);

module.exports = router 
