const express = require("express");
const router = express.Router();

const User = require("../model/model");

//update data by id,name
router.patch("/edit/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudentData = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(updateStudentData);
    res.status(201).send(updateStudentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
