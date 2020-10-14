const express = require('express');
const dotenv = require('dotenv');
const body_parser = require('body-parser');
const router = require('./routing/route');
const mongoose = require('mongoose');
const path = require('path');

// App init
const app = express();

// Middlewares
app.use(express.json());
app.use(body_parser.json());

// Dotenv config
dotenv.config({
  path: './.env'
});

// Routing
app.use('/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
  })
}

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.get('/post', (req, res) => {
  res.send('Post');
});

// Port listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log('There was an error');
    process.exit(1);
  }
  
  console.log('Connected successfuly!');
  
  // Database connection
  require('./database/database');
});