const mongoose = require('mongoose');

const Team = new mongoose.Schema({
  id: Number,
  name: String,
  result: Number
});

const City = new mongoose.Schema({
  id: Number,
  name: String,
  result: Number,
  children: [Team]
});

const Enterprise = new mongoose.Schema({
  id: Number,
  name: String,
  result: Number,
  children: [City]
});

const Data = new mongoose.Schema({
  result: Number,
  date: String,
  children: [Enterprise]
});

const ConnexionSchema = new mongoose.Schema({
  _id: Object,
  data: [Data]
});

module.exports = mongoose.model('Connexion', ConnexionSchema);
