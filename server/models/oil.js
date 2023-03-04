const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oilSchema = new Schema({
    type: Object,
    properties: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,       
        },
        image: {
            type: String,
            required: true
        },
        highlight: {
            type: Boolean,
            required: true
        },
        themes: {
            type: Array,
            items: {
                properties: {
                    theme: {
                        type: String,
                        required: true
                    },
                    useAlone: { 
                        type: String,
                    },
                    useWithOthers: {
                        type: Object,
                        properties: {
                            description: {
                                type: String,
                            },
                            needed: {
                                type: Array,
                                items: {
                                    type: Number,
                                }
                            }
                        }
                    }   
                }
            },
            "minItems": 1,
            "maxItems": 4
        },
        categories: {
            type: Array,
            items: {
                properties: {
                    category: {
                        type: String,
                        required: true
                    },
                    useAlone: { 
                        type: String,
                    },
                    useWithOthers: {
                        type: Object,
                        properties: {
                            description: {
                                type: String,
                            },
                            needed: {
                                type: Array,
                                items: {
                                    type: Number,
                                }
                            }
                        }
                    }   
                }
            },
            "minItems": 1,
            "maxItems": 4
        },
        associations: {
            type: Array,
            items: {
                properties: {
                    association: {
                        type: Number,
                    }
                }
            },
            "minItems": 1,
        },
    }
})
module.exports = mongoose.model("Oil", oilSchema, "oils")
