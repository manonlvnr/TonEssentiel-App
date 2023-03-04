const Oil = require('../models/oil');
const mongoose = require('mongoose');
// GET all oils
const getAllOils = async (req, res) => {
    try {
        const oils = await Oil.find({});
        res.status(200).json(oils);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// res.send('Voici toutes les huiles!');
// res.json({message: "Voici toutes les huiles!"})

// GET one oil
const getOneOil = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No oil with that id');
    }; // if id is not valid, return 404
    
    try {
        const oil = await Oil.findById(id);
        if (oil) {
            return res.status(200).json(oil);
        }
        res.status(404).json({ message: 'Oil not found!' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// POST one oil

// PUT one oil

module.exports = {
    getAllOils,
    getOneOil,
}
