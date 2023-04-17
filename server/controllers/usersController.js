const User = require('../models/user');
const jwt = require('jsonwebtoken');

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

module.exports = {
    signinUsers,
    signupUsers
}
