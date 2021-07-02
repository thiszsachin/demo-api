const express = require("express");
const router = express.Router();
const User = require("../model/User");

// Single USers
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
});

// All USer
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

// Create User
router.post("/", async (req, res) => {
  const user = new User({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.remove({ _id: req.params.id });
    res.json(deleteUser);
  } catch (error) {
    res.json({ message: error });
  }
});

//Update a User
router.patch("/:id", async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updateUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
