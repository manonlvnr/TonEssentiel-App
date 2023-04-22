const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5001;
const mongoose = require('mongoose');

//middleware
app.use(express.json());
app.use(cors());

// Main API's path
// Oils routes
const oils = require('./routes/oils');
app.use('/api/oils', oils);

// Users routes
const users = require('./routes/users');
app.use('/api/users', users);


// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>  {
        console.log('MongoDB connected...');
        app.listen(port, () => {
        console.log(`Server started on port ${port}`);
        });
    })
    .catch(err => console.log(err));

// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })


