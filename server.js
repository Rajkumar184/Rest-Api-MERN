require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/database").call();

const cors = require("cors");
app.use(cors());

const home = require("./router/home");
app.use("/", home);

const postUser = require("./router/postUser");
app.use("/", postUser);

const editUser = require("./router/editUser");
app.use("/", editUser);

const deleteUser = require("./router/deleteUser");
app.use("/", deleteUser);

const getSpecificUser = require("./router/getSpecificUser");
app.use("/", getSpecificUser);

app.listen(process.env.PORT, () => {
  console.log("Server has started!");
});
