const mongoose = require("mongoose");

async function dbConnect() {
  const MONGO_URI = "mongodb://127.0.0.1:27017/service_guide_app";

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(MONGO_URI);
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.log("MongoDB Connection Error: ", err);
    throw err;
  }
}

module.exports = dbConnect;
