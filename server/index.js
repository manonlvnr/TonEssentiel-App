const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
require("dotenv").config();
const http = require('http');
const port = process.env.PORT || 5001;
const mongoose = require('mongoose');

//middleware
app.use(express.json());
app.use(helmet());

// // Définir les options CORS pour votre API spécifique
// const corsOptions = {
//     origin: 'https://ton-essentiel.vercel.app',
//     optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(corsOptions));

app.use(cors());

// Main API's path
// Oils routes
const oils = require('./routes/oils');
app.use('/api/oils', oils);

// Users routes
const users = require('./routes/users');
app.use('/api/users', users);

const server = http.createServer(app);

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>  {
        console.log('MongoDB connected...');
        server.listen(port, () => {
        console.log(`Server started on port ${port}`);
        });
    })
    .catch(err => console.log(err));

// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })


