const express = require('express');
const mongoose = require('mongoose');
const connectionString = "mongodb+srv://Non-ProfitCenter:NonProfit2022@nonprofitdata.yom6d.mongodb.net/Premium_Data"


const app = express();
const PORT = process.env.PORT || 3000;



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

