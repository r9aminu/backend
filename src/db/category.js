const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
});

const Category = mongoose.model("Category", schema);
module.exports = Category;
