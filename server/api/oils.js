const express = require('express');
const router = express.Router()

const Oil = require('../models/oil');

// GET /api/oils
router.get('/', (req, res) => {
      // Code pour récupérer tous les huiles
    res.send('Voici toutes les huiles!');
    User.find()
        .then(oils => res.json(oils))
        .catch(err => console.log(err))
})

// GET /api/oils/:id
// router.get('/:id', (req, res) => {
//     // Code pour récupérer une huile par son id
//   });

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
// router.put('/:id', (req, res) => {
//     // Code pour mettre à jour une huile par son id
//   });

module.exports = router 
