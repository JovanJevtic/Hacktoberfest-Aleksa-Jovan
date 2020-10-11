const dotenv = require('dotenv').config()
const mongoose = require('mongoose');

//? DATABASE CONNECTION
mongoose.connect( process.env.URI , {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));