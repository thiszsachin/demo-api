const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

// import Routes
const usersRoute = require("./routes/users");

app.use("/users", usersRoute);
// Connect Db
mongoose.connect(
  process.env.CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDb Connected");
  }
);

app.listen("5000", () => {
  console.log("Server is Running on port: 5000");
});
