const MongoClient = require('mongodb').MongoClient;
const URI = "mongodb+srv://Hacktoberfest2020:5g1Muvea12@hacktoberfest2020.u8z1q.mongodb.net/Hacktoberfest2020?retryWrites=true&w=majority";
const client = new MongoClient(URI, { useNewUrlParser: true }, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});