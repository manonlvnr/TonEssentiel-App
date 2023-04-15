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
        const oils = await Oil.find({ name: oil });
        if (oils) {
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

// POST one oil
const createOil = async (req, res) => {
    // const { name, description, image } = req.body;

    // try {
    //     const oil = await Oil.create({ name, description, image });
    //     res.status(200).json({ oil, message: 'Oil created successfully!' });
    // } catch (error) {
    //     res.status(400).json({ error: error.message, message: 'Error creating oil' });
    // }

    const newOil = await Oil.create({ ...req.body });
    const insertedOil = await newOil.save();
    return res.status(201).json(insertedOil);
    
    
    // try {
    //     const oil = await new Oil(req.body);
    //     await oil.save();
    //     res.status(201).json({ oil, message: 'Oil created successfully!' });
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ error: error.message, message: 'Error creating oil' });
    // }
}

// PUT one oil
const updateOil = async (req, res) => {
    const { id } = req.params;
    const oil = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No oil with id: ${id}`);
    const updatedOil = await Oil.findByIdAndUpdate(id, oil, { new: true });
    res.json(updatedOil);
}

module.exports = {
    getAllOils,
    getOneOilByName,
    getOilBySymptom,
    getOilByTheme,
    getOilByDiffusion,
    createOil,
    updateOil
}
