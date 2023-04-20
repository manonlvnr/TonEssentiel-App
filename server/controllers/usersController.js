const User = require('../models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365
    });
}

const signinUsers = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signin(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
        return
    }
    catch (err) {
        res.status(400).json({ message: err.message });
        return
    }

    res.json({ message: 'Signin user' });
};

const signupUsers = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const user = await User.signup(userName, email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
        return
    }
    catch (err) {
        res.status(400).json({ message: err.message });
        return
    }

    res.json({ message: 'Signup user' });
};

const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.find({ email: email });
        if(user) {
            return res.status(200).json(user);
        }
        res.status(404).json({ message: 'User not found' });
    }
    catch (err) {
        res.status(500).json({ message: err.message, message: 'Error getting user' });
    }
}

const addFavorites = async (req, res) => {
    const { email } = req.params;
    const { favorites } = req.body;

    try {
        const updateUserFav = await User.findOneAndUpdate({email: email}, { $push: { favorites: favorites } }, { new: true });
        res.status(200).json(updateUserFav);
        return
    }
    catch (err) {
        res.status(400).json({ message: err.message });
        return
    }
}

const removeFavorites = async (req, res) => {
    const { email } = req.params;
    const { favorites } = req.body;

    try {
        const updateUserFav = await User.findOneAndUpdate({email: email}, { $pull: { favorites: favorites } }, { new: true });
        res.status(200).json(updateUserFav);
        return
    }
    catch (err) {
        res.status(400).json({ message: err.message });
        return
    }
}

module.exports = {
    signinUsers,
    signupUsers,
    getUserByEmail,
    addFavorites,
    removeFavorites
}
