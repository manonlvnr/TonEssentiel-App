const express = require('express');
const router = express.Router();
const { signinUsers, signupUsers } = require('../controllers/usersController');

// signin
router.post('/signin', signinUsers);

// Signup
router.post('/signup', signupUsers);

module.exports = router
