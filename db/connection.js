const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

let mongoDB = process.env.DB_CONN_STRING;

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose.connection;
