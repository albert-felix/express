const express = require("express");
const teachersDB = require("../teaachersDb/teachersDb");

const teachersRouter = express.Router();

teachersRouter
  .get("/",(req,res) => {
    res.status(200).json({teachers : teachersDB})
  });

  module.exports = teachersRouter;