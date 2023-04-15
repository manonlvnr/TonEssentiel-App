const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    type: Object,
        name: {
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
    userSchema.statics.signup = async function( name, email, password ) {
        const exists = await this.findOne({ email })

        if(exists) {
            throw new Error('User already exists')
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await this.create({
            name,
            email,
            password: hash
        })

        return user.save()
    }

module.exports = mongoose.model("User", userSchema, "users")
