const User = require("../models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const nodemailer = require("nodemailer");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
    });
};

const signinUsers = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signin(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
        return;
    } catch (err) {
        res.status(400).json({ message: err.message });
        return;
    }

    res.json({ message: "Signin user" });
};

const signupUsers = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const user = await User.signup(userName, email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
        return;
    } catch (err) {
        res.status(400).json({ message: err.message });
        return;
    }

    res.json({ message: "Signup user" });
};

const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.find({ email: email }).populate("favorites");
        if (user) {
            return res.status(200).json(user);
        }
        res.status(404).json({ message: "User not found" });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            message: "Error getting user",
        });
    }
};

const addFavorites = async (req, res) => {
    const { email } = req.params;
    const { favorites } = req.body;

    try {
        const updateUserFav = await User.findOneAndUpdate(
            { email: email },
            { $push: { favorites: favorites } },
            { new: true }
        ).populate("favorites");
        res.status(200).json(updateUserFav);
        return;
    } catch (err) {
        res.status(400).json({ message: err.message });
        return;
    }
};

const removeFavorites = async (req, res) => {
    const { email } = req.params;
    const { favorites } = req.body;

    try {
        const updateUserFav = await User.findOneAndUpdate(
            { email: email },
            { $pull: { favorites: favorites } },
            { new: true }
        ).populate("favorites");
        res.status(200).json(updateUserFav);
        return;
    } catch (err) {
        res.status(400).json({ message: err.message });
        return;
    }
};

const updateProfile = async (req, res) => {
    const { userName, newEmail, password } = req.body;
    const { email } = req.params;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: "Pas d'utilisateur trouvé" });
        }

        const updates = {};
        if (userName && userName !== user.userName) {
            updates.userName = userName;
        }

        if (newEmail && newEmail !== user.email) {
            const emailExist = await User.findOne({ email: newEmail });
            if (emailExist) {
                return res
                    .status(400)
                    .send({ message: "L'email existe déjà !" });
            }
            if (!validator.isEmail(newEmail)) {
                return res
                    .status(400)
                    .send({ message: "Please enter a valid email" });
            }
            updates.email = newEmail;
        }

        if (password) {
            const passwordUsed = await bcrypt.compare(password, user.password);
            if (!passwordUsed) {
                const isStrongPassword = validator.isStrongPassword(password);
                if (!isStrongPassword) {
                    return res
                        .status(400)
                        .send({
                            message:
                                "Le mot de passe doit comporter au moins 8 caractères et contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
                        });
                }
                const salt = await bcrypt.genSalt(10);
                updates.password = await bcrypt.hash(password, salt);
            }
        }

        console.log(updates);
        const userUpdate = await User.findOneAndUpdate({ email }, { $set: updates });

        const token = createToken(userUpdate._id);
        res.status(200).json({ email, token });
        return;
    } catch (err) {
        res.status(400).json({ message: err.message });
        return;
    }
};



const sendResetLink = async (req, res) => {
    const { email } = req.body;

    try {
        const emailExist = await User.findOne({ email: email });
        if (!emailExist) {
            return res.status(400).send({ message: "Il n'existe pas d'utilisateur avec cet email" });
        }

        const token = jwt.sign({ _id: emailExist._id }, process.env.SECRET, { expiresIn: "10m"});

        const link = `https://ton-essentiel.vercel.app/reset-password/${emailExist._id}/${token}`;

        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Réinitialisation du mot de passe - Ton Essentiel",
            text: `
            Bonjour,
            Vous avez demandez à réinitialiser votre mot de passe de votre compte Ton Essentiel.
            Pour cela veuillez cliquer sur ce lien : ${link}
            Si vous n'êtes pas à l'origine de cette demande, veuillez ignorer ce mail.`,
        };

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log("Error occurs", err);
            } else {
                console.log("Email sent");
            }
        });

    } catch (err) {
        res.status(400).json({ message: err.message });
        return;
    }
};

const resetPassword = async (req, res) => {
    const { id, token } = req.params;
    const { newPassword, confirmPassword } = req.body;

    try {
        if(newPassword || confirmPassword) {
            if (newPassword == confirmPassword) {
                const validToken = jwt.verify(token, process.env.SECRET);
                if (validToken) {
                    const userInfo = await User.findOne({ _id: id });
                    if (userInfo) {
                        const isStrongPassword = validator.isStrongPassword(newPassword);
                        if (!isStrongPassword) {
                            return res.status(400).send({message:"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",});
                        }
                        const salt = await bcrypt.genSalt(10);
                        const hashedPassword = await bcrypt.hash(newPassword, salt);

                        const reset = await User.findOneAndUpdate({ _id: id }, { $set: { password: hashedPassword } });
                        if (reset) {
                            return res.status(200).send({ message: "Mot de passe modifié" });
                        }
                    } else {
                        return res.status(400).send({ message: "Utilisateur introuvable" });
                    }
                } else {
                    return res.status(400).send({ message: "Le lien a expiré" });
                }
            } else {
                return res.status(400).send({ message: "Les mots de passe ne correspondent pas" });                
            }
        } else {
            return res.status(400).send({ message: "Tous les champs doient être remplie" });
        }
    }

    catch (err) {
        res.status(400).json({ message: err.message });
        return;
    }
};

module.exports = {
    signinUsers,
    signupUsers,
    getUserByEmail,
    updateProfile,
    addFavorites,
    removeFavorites,
    sendResetLink,
    resetPassword,
};
