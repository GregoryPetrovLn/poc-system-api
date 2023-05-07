const express = require("express");

const connectDB = require("./config/db");

require("colors");

//Load env files
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const app = express();

//DB
connectDB();

//Init server
const PORT = process.env.PORT || 3300;
const server = app.listen(PORT, () => {
  console.log("==================================================");
  console.log("==================================================");
  console.log("==================================================");
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
