const express = require('express');
const dotenv = require('dotenv');
const body_parser = require('body-parser');
const postsRouter = require('./routing/posts');
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
app.get('/', (req, res) => {
  res.send('API is running....');
});
app.use('/api/posts', postsRouter);


//? Static files serve
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

// Port listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log('There was an error');
    process.exit(1);
  }
  
  // Database connection
  require('./database/database');
});