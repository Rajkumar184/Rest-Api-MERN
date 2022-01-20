const express = require("express");
const router = express.Router();

const User = require("../model/model");

// get method
// router.get("/post/mens", async (req, res) => {
//   try {
//     const userData = await User.find({});
//     res.status(201).send(userData);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

//get specific data by id,name
router.get("/get/mens/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const checkUser = await User.find({ name });
    console.log(checkUser);

    if (!checkUser) {
      return res
        .status(401)
        .json({ message: "User is not available with that name!" });
    }

    res.status(201).json({ checkUser });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
