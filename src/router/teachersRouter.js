const express = require("express");
const teachersDB = require("../teaachersDb/teachersDb");

const teachersRouter = express.Router();

teachersRouter
  .get("/", (req, res) => {
    res.status(200).json({ teachers: teachersDB });
  })

  .post("/", (req, res) => {
    req.body.forEach(teacher => {
      if (teacher.id && teacher.firstName) {
        teachersDB.push(teacher);
        res.status(200).json({ Message: "Teachers data updated successfully" });
      } else {
        res.status(400).send("Data invalid");
      }
    });
  })

  .delete("/", (req, res) => {
    req.body.forEach(id => {
      let requiredTeacherIndex;
      teachersDB.forEach((teacher, teacherIndex) => {
        if (id === teacher.id) {
          requiredTeacherIndex = teacherIndex;
          teachersDB.splice(requiredTeacherIndex,1);
          res.status(200).json({Message : "Teachers data deleted"});
        }else {
          res.status(404).send("Data Not Found");
        }
      });
    });
  });

module.exports = teachersRouter;
