// const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_STRING = process.env.MONGODB_STRING || "";
let dataBase;

const connectMongoDB = () => {
  return new Promise((resolve, reject) => {
    if (!MONGODB_STRING) reject("MongoDB connection string is not provided.");
    // dataBase = mongoose.createConnection(MONGODB_STRING);
    // dataBase.on("error", (error) => reject(error));
    // dataBase.once("open", () => resolve("Connected with MongoDB!"));
    resolve("Connected");
  });
};

const getMongoDBInstance = () => {
  if (dataBase) return dataBase;
  connectMongoDB()
    .then(() => dataBase)
    .catch((error) => console.log(error));
};

module.exports = { connectMongoDB, getMongoDBInstance };
