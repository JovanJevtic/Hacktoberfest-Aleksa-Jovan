const express = require('express');
const dotenv = require('dotenv');

// App init
const app = express();

// Dotenv config
dotenv.config({
  path: './.env'
});

// Port listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log('--There was an error');
    process.exit(1);
  }
  console.log('--Connected successfuly');
});