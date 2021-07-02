const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require("body-parser");
require("dotenv/config");

// app.use(bodyParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
