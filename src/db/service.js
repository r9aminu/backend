const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  imageURL: String,
});

const Service = mongoose.model("Service", schema);
module.exports = Service;
