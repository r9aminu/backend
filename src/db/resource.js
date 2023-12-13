const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  subTitle: String,
  address: String,
  description: String,
  phoneNo: String,
  websiteURL: String,
  lat: Number,
  lng: Number,
  locationDescription: String,
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

const Resource = mongoose.model("Resource", schema);
module.exports = Resource;
