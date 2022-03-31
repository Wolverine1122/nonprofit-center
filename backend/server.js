const connectionString = "mongodb+srv://Non-ProfitCenter2022:nonprofit22@cluster0.bggwc.mongodb.net/nonprofit-centerDb";
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Routes
const main = require('./routes/main.js')
const searchRoute = require('./routes/search.js');
const mapSearch = require('./routes/mapSearch.js');

// access .env
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Express
const app = express();

// Middleware
app.use("/", main);
app.use("/search", searchRoute);
app.use("/map-search", mapSearch);

// Main Function
async function start() {
  try {
    await mongoose.connect(connectionString, { useNewUrlParser: true });
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch(err) {
      console.log(err);
  }
}

start();