const User = require('../models/user');

const signinUsers = async (req, res) => {
    res.json({ message: 'Signin user' });
};

const signupUsers = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.signup(name, email, password);
        res.status(200).json({ email, user });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }

    res.json({ message: 'Signup user' });
};

module.exports = {
    signinUsers,
    signupUsers
}
