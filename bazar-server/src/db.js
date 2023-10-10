const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/bazar-products";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log("DB is connected", conn.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
