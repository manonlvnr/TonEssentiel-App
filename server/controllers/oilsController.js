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
    getOneOil,
    createOil,
    updateOil
}
