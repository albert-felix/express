const express = require("express");
const teachersRouter = require("./router/teachersRouter");

const app = express();


app.use("/teachers", teachersRouter);


const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}.`);
});
