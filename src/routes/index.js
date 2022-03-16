const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({
    tirulo: 'Boas-vindas ao assistente de raças das Crônicas de Fangir!',
    data: "15/03/2022",
  });
});

module.exports=router