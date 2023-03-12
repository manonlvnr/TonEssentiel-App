const { json } = require('body-parser');
const express = require('express');
const router = express.Router()
const { getAllOils, getOneOil, createOil, updateOil } = require('../controllers/oilsController');

// GET /api/oils
// Code pour récupérer tous les huiles
router.get('/', getAllOils);

// GET /api/oils/:id
// Code pour récupérer une huile par son id
router.get('/:id', getOneOil);

// POST /api/oils/createOils
router.post('/createOils', createOil); 


// PUT /api/oils/updateOils/:id
// Code pour mettre à jour une huile par son id
router.put('/updateOils/:id', updateOil);

module.exports = router 
