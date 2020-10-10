const express = require('express');
const dotenv = require('dotenv');
const body_parser = require('body-parser');
const router = require('./routing/route');

// App init
const app = express();

// Middlewares
app.use(express.json());
app.use(body_parser.json());
app.use('/post', router);

// Dotenv config
dotenv.config({
  path: './.env'
});

// Routing
app.get('/', (req, res) => {
  res.send('Home');
  console.log('---Home route');
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