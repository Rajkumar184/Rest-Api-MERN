const express = require("express");
const router = express.Router();

const User = require("../model/model");

router.post("/post/mens", async (req, res) => {
  const { ranking, name, age, country, rating } = req.body;

  try {
    if (!ranking || !name || !age || !country || !rating) {
      return res.status(401).json({ message: "All fields are mandatory!" });
    }

    await User.create({
      ranking,
      name,
      age,
      country,
      rating,
    });

    res.status(201).json({ message: "Mens User's data saved successfully!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
