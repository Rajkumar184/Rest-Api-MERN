const express = require("express");
const router = express.Router();

const User = require("../model/model");

router.delete("/delete/mens/:name", async (req, res) => {
  try {
    const deleteStudentData = await User.findOneAndDelete(req.body.name);
    if (!deleteStudentData) {
      return res.status(400).send();
    }
    console.log(deleteStudentData);
    res.send(deleteStudentData);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
