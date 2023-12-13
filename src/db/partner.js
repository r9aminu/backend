const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  imageUrl: String,
});

const Partner = mongoose.model("Partner", partnerSchema);
module.exports = Partner;
