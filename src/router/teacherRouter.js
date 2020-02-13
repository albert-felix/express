const express = require("express");
const teachersDB = require("../teaachersDb/teachersDb");

const teacherRouter = express.Router();

teacherRouter
.get("/:id", (req, res) => {
  const { id } = req.params;
  const requiredTeacher = teachersDB.find(teacher => {
    if (parseInt(id, 10) === teacher.id) return true;
    else return false;
  })
  if (requiredTeacher) {
    res.status(200).json({ Teacher: requiredTeacher });
  } else {
    res.status(404).send("Not found");
  }
})
.post("/",(req,res) => {
  if(req.body.id && req.body.firstName){
    teachersDB.push(req.body);
    res.status(200).json({Message : "Teachers data updated"});
  }else{
    res.status(400).send("Data insufficient");
  }
})
.patch("/:id",(req,res) => {
  const {id} = req.params;
  let requiredTeacherIndex;
  const requiredTeacher = teachersDB.find((teacher,teacherIndex) => { 
    if (parseInt(id,10) === teacher.id) {
      requiredTeacherIndex = teacherIndex;
      return true;
    }
    else return false;
  })
  if (requiredTeacher){
    const { 
      firstName = requiredTeacher.firstName,
      lastName = requiredTeacher.lastName,
      age = requiredTeacher.age,
      gender = requiredTeacher.gender,
      specialization = requiredTeacher.specialization
    } = req.body;
    teachersDB[requiredTeacherIndex] = {
      id : requiredTeacher.id,
      firstName,
      lastName,
      age,
      gender,
      specialization
    }
    res.status(200).json({Message : "Teacher data updated"});
  }else{
    res.status(400).send("Invalid id number")
  }
});


module.exports = teacherRouter;
