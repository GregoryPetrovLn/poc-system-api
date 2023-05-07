const express = require("express");
const path = require("path");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./src/middleware/error");
const cookieParser = require("cookie-parser");
const security = require("./src/middleware/security");
require("colors");

//Load env files
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

//Import routes
const products = require("./src/routes/products");
const auth = require("./src/routes/auth");

const app = express();

//Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

//DB
connectDB();

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Security middleware
security(app);

//Mount routes
app.use("/api/products", products);
app.use("/api/auth", auth);

//Middleware error hanlder
app.use(errorHandler);

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

//Handler unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
