const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    type: Object,
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        favorites: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Oil'
            }
        ]
    })

    // Static methods
    userSchema.statics.signup = async function( userName, email, password ) {

        if(!userName || !email || !password) {
            throw new Error('Merci de remplir tous les champs')
        }

        if(!validator.isEmail(email)) {
            throw new Error('Merci de renseigner un email valide')
        }

        if(!validator.isStrongPassword(password)) {
            throw new Error('Le mot de passe doit comporter au moins 8 caractères et contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.')
        }

        const exists = await this.findOne({ email })

        if(exists) {
            throw new Error('Cet email est déjà utilisé')
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await this.create({
            userName,
            email,
            password: hash
        })

        return user.save()
    }

    userSchema.statics.signin = async function( email, password ) {
        if( !email || !password ) {
            throw new Error('Merci de remplir tous les champs')
        }

        const userExist = await this.findOne({ email })
        if(!userExist) {
            throw new Error('L\'utilisateur n\'existe pas ou l\'email est incorrect')
        }

        const passwordMatch = await bcrypt.compare(password, userExist.password)
        if(!passwordMatch) {
            throw new Error('Le mot de passe est incorrect')
        }

        return userExist
    }

    // userSchema.statics.updateUser = async function( userName, email, password ) {
    //     if ( !email || !userName) {
    //         throw new Error('Email and username are required')
    //     }

    //     const emailExist = await this.findOne({ email })
    //     if ( !validator.isEmail(email)) {
    //         throw new Error('Please enter a valid email')
    //     }

    //     if ( !password ) { 
    //         const actualPassword = this.findOne({ password })
    //         password = actualPassword
    //     } else {
    //         const passwordUsed = await bcrypt.compare(password, emailExist.password)
    //         if(!passwordUsed) {
    //             throw new Error('Please not enter the same password as before')
    //         } else if ( !validator.isStrongPassword(password)) {
    //             throw new Error('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character')
    //         }
    //     }


    //     const salt = await bcrypt.genSalt(10)
    //     const hash = await bcrypt.hash(password, salt)

    //     const newUserInfos = await this.update({email : email}, {userName : userName}, {password : password})

    //     return newUserInfos.save()
    // }

module.exports = mongoose.model("User", userSchema, "users")
