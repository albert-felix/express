const express = require("express");
const teachersRouter = require("./router/teachersRouter");
const teacherRouter = require("./router/teacherRouter")
const bodyParser = require("body-parser")


const app = express();

app.use(bodyParser.json());
app.use("/teachers", teachersRouter);
app.use("/teacher", teacherRouter);


const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}.`);
});
