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
      } else {
        res.status(400).send("Data invalid");
      }
    })
    res.status(200).json({ Message: "Teachers data updated successfully" });
    
  })

  .delete("/", (req, res) => {
    req.body.id.forEach(id => {
      teachersDB.forEach((teacher, teacherIndex) => {
        let requiredTeacherIndex;
        if (id === teacher.id) {
          requiredTeacherIndex = teacherIndex;
          teachersDB.splice(requiredTeacherIndex,1);
        }
      })
    })
    res.status(200).json({Message : "Teachers data deleted"});
  });

module.exports = teachersRouter;
