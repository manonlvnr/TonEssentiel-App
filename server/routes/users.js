const express = require('express');
const router = express.Router();
const { signinUsers, signupUsers, getUserByEmail, addFavorites, removeFavorites } = require('../controllers/usersController');

// signin
router.post('/signin', signinUsers);

// Signup
router.post('/signup', signupUsers);

// Get user by id
router.get('/:email', getUserByEmail);

// Favorites
// Ajouter aux favs de l'utilisateur
router.post('/:email', addFavorites)

// Supprimer des favs de l'utilisateur
router.delete('/:email', removeFavorites)

module.exports = router
