const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI, { useNewUrlParser: true });

const db_connection = mongoose.connection;
db_connection.then((db) => {
  console.log('-Successfuly connected to the database!');
  return db;
}).catch((err) => {
  console.log('-There has been error connecting to the database: ', err);
});