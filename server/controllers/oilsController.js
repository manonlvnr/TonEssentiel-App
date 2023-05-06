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

// GET one oil by name
const getOneOilByName = async (req, res) => {
    const { oil } = req.params;

    try {
        const oils = await Oil.find({ name: oil }).populate('OilsAssociated');
        if (oils.length > 0) { 
            return res.status(200).json(oils);
        }
        res.status(404).json({ message: 'There is no oil with this name...' });

    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Error getting oil' });
    }
}

// GET oils By Symptom
const getOilBySymptom = async (req, res) => {
    const { name } = req.params;

    try {
        const oils = await Oil.find({ symptoms: { $elemMatch: { name: name } }});
        if (oils) {
            return res.status(200).json(oils);
        }
        res.status(404).json({ message: 'There is no oil for this symptom...' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Error getting oil' });
    }
}

// GET oils By Theme
const getOilByTheme = async (req, res) => {
    const { theme } = req.params;

    try {
        const oils = await Oil.find({ symptoms: { $elemMatch: { theme: theme } }});
        if (oils) {
            return res.status(200).json(oils);
        }
        res.status(404).json({ message: 'There is no oil for this theme...' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Error getting oil' });
    }
}

// GET oils By Diffusion
const getOilByDiffusion = async (req, res) => {
    const { name } = req.params;

    try {
        const oils = await Oil.find({ symptoms: { $elemMatch: { diffusions: { $elemMatch: { name: name } } } }});
        if (oils) {
            return res.status(200).json(oils);
        }
        res.status(404).json({ message: 'There is no oil for this type of diffusion...' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Error getting oil' });
    }
}

const searchOilByKeyword = async (req, res) => {
    try {

        const searchKeyword = req.query.keyword

        const oils = await Oil.find({
            $or: [
                { name: { $regex: searchKeyword, $options: "i" } },
                { symptoms: { $elemMatch: { name: { $regex: searchKeyword, $options: "i" } } } },
                { symptoms: { $elemMatch: { diffusions: { $elemMatch: { name: { $regex: searchKeyword, $options: "i" } } } } } },
            ],
        });

        if (oils.length > 0) {
            res.status(200).json(oils);
        } else {
            res.status(404).json({ message: "No oil found" });
        }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
}

module.exports = {
    getAllOils,
    getOneOilByName,
    getOilBySymptom,
    getOilByTheme,
    getOilByDiffusion,
    searchOilByKeyword,
}
