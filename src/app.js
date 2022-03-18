const express = require("express");
const app = express();

const index = require("./routes/index");

// ".use" é um método de requisição, neste caso remete ao 
app.use(express.json()); 

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-TypeError, Accepet"
  );
  next();
});

app.use("/", index);

module.exports = app;
