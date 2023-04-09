const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oilSchema = new Schema({
    type: Object,
        name: {
            type: String,
            // required: true
        },
        description: {
            type: String,       
        },
        image: {
            type: String,
            // required: true
        },
        highlight: {
            type: Boolean,
            // required: true
        },
        symptoms: {
            type: Array,
            name: {
                type: String,
                // required: true
            },
            theme: {
                type: String,
                // required: true
            },
            diffussions: {
                type: Array,
                name: {
                    type: String,
                    // required: true
                },
                descriptionAlone: {
                    type: String,
                },
                descriptionWithOthers: {
                    type: String,
                },
            }
        },
        OilsAssociated: {
            type: Array,
            OilAssociated: {
                type: Number,
            }
        },
})
module.exports = mongoose.model("Oil", oilSchema, "oils")
