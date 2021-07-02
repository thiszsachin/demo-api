const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/", (req, res) => {
  res.send("From Routes");
  next();
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
