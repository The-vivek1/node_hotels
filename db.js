const mongoose = require("mongoose");
require('dotenv').config();
// define the Mongodb connection Url
// const mongoUrl= process.env.MONGODB_URL_LOCAL;
 
const mongoUrl = process.env.MONGODB_URL;

 //afer 27017/ use your database name
 mongoose.connect(mongoUrl) ;
 
const db  = mongoose.connection;
  

//Define event listeners for database connection 
db.on("connected", () => {
  console.log("connected to MongoDB");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Graceful shutdown (IMPORTANT)
process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("MongoDB disconnected on app termination");
  process.exit(0);
});

module.exports=db;
