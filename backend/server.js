const connectionString = "mongodb+srv://Non-ProfitCenter:NonProfit2022@nonprofitdata.yom6d.mongodb.net/Basic_Data?retryWrites=true&w=majority"
const express = require('express');
const mongoose = require('mongoose');

// Routes
const testRoute = require('./routes/test.js');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(testRoute);

async function start() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true
    })
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch(err) {
      console.log(err);
  }
}

start();

