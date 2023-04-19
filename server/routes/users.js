const express = require('express');
const router = express.Router();
const { signinUsers, signupUsers, getUserById, updateFavorites } = require('../controllers/usersController');

// signin
router.post('/signin', signinUsers);

// Signup
router.post('/signup', signupUsers);

// Get user by id
router.get('/:id', getUserById);

// Favorites
// Mettre les à jour les fav de l'utilisateur
router.post('/:id', updateFavorites)

module.exports = router
