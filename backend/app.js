/* RACINE DE L'API */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const authRoutes = require('./routes/auth');
const saucesRoutes = require('./routes/sauces');
const mongoose = require('mongoose');
require('dotenv').config();
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});

app.use(limiter); // Against brute force attacks

app.use(helmet()); // Addition of a security layer of the http header

mongoose.connect(`${process.env.MONGOOSE_CONNECT}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connection to MongoDB successful'))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

/* ROUTES */
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api/auth', authRoutes);
app.use('/api/sauces', saucesRoutes);

module.exports = app;