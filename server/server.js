const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5001;
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

// Main path API
const oils = require('./api/oils');
app.use('/api/oils', oils);

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


