const express = require('express');
const router = express.Router();
const { signinUsers, signupUsers, getUserByEmail, updateProfile, addFavorites, removeFavorites, sendResetLink } = require('../controllers/usersController');

// signin
router.post('/signin', signinUsers);

// Signup
router.post('/signup', signupUsers);

// Get user by email
router.get('/:email', getUserByEmail);

// Update info de l'utilisateur
router.put('/profile/:email', updateProfile)

// Favorites
// Ajouter aux favs de l'utilisateur
router.post('/favorites/:email', addFavorites)

// Supprimer des favs de l'utilisateur
router.delete('/favorites/:email', removeFavorites)

// Mail pour envoyer le lien de reset password
router.post('/reset-password', sendResetLink)

// 

module.exports = router
