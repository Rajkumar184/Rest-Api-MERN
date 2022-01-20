const mongoose = require("mongoose");

const RESTschema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  event: {
    type: String,
    default: "mens odi ranking",
  },
});

module.exports = mongoose.model("fakeUsers", RESTschema);
