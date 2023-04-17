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
    })

    // Static methods
    userSchema.statics.signup = async function( userName, email, password ) {

        if(!userName || !email || !password) {
            throw new Error('Please fill all fields')
        }

        if(!validator.isEmail(email)) {
            throw new Error('Please enter a valid email')
        }

        if(!validator.isStrongPassword(password)) {
            throw new Error('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        }

        const exists = await this.findOne({ email })

        if(exists) {
            throw new Error('User already exists')
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
            throw new Error('Please fill all fields')
        }

        const userExist = await this.findOne({ email })
        if(!userExist) {
            throw new Error('User does not exist or the email is incorrect')
        }

        const passwordMatch = await bcrypt.compare(password, userExist.password)
        if(!passwordMatch) {
            throw new Error('Password is incorrect')
        }

        return userExist
    }

module.exports = mongoose.model("User", userSchema, "users")
