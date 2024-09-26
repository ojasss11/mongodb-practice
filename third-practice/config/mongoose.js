/*
const mongoose = require("mongoose");
const debuglog = require("debug")("development:mongooseconfig");

mongoose.connect("mongodb://127.0.0.1:27017/testdb2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", function (err) {
  debuglog("error");
});

db.once("open", function () {
  debuglog("Connected to the database");
});

module.exports = db;
*/
const mongoose = require("mongoose");
const debuglog = require("debug")("development:mongooseconfig");

// Connect to MongoDB using Mongoose with the given URI and options
mongoose.connect("mongodb://127.0.0.1:27017/testdb2", {
  useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
  useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
});

// Get the Mongoose connection object
const db = mongoose.connection;

// Listen for connection errors and log them
db.on("error", function (err) {
  debuglog("error", err); // Log any error that occurs during the connection
});

// Once the connection is successfully opened, log a message
db.once("open", function () {
  debuglog("Connected to the database"); // Confirm successful connection
});

// Export the connection object for use in other modules
module.exports = db;
