const { json } = require('body-parser');
const express = require('express');
const router = express.Router()
const { getAllOils, getOneOil } = require('../controllers/oilsController');

// GET /api/oils
// Code pour récupérer tous les huiles
router.get('/', getAllOils);

// GET /api/oils/:id
// Code pour récupérer une huile par son id
router.get('/:id', getOneOil);

// POST /api/oils
// router.post('/', (req, res) => {
//       // Code pour ajouter une huile
//     const { name, email } = req.body;
//     const newUser = new User({
//         name: name, email: email
//     })
//     newUser.save()
//         .then(() => res.json({
//             message: "Created account successfully"
//         }))
//         .catch(err => res.status(400).json({
//             "error": err,
//             "message": "Error creating account"
//         }))
// })

// PUT /api/oils/:id
// Code pour mettre à jour une huile par son id
// router.put('/:id', (req, res) => {
//   });

module.exports = router 
