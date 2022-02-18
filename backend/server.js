const connectionString = "mongodb+srv://Non-ProfitCenter:NonProfit2022@nonprofitdata.yom6d.mongodb.net/Basic_Data?retryWrites=true&w=majority"
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Routes
const searchRoute = require('./routes/search.js');

// access .env
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Express
const app = express();

// Middleware
app.use("/search", searchRoute);

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/public", "index.html"));
});


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

