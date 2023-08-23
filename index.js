const express = require("express");
const app = express();
const {
  sum,
  sub,
  mult,
  div
} = require("./calculadora")

app.get("/jsonCalculadora", function (req, res) {
  let json={}

  json.soma=sum(2,3)
  json.subtracao=sub(15,3)
  json.multiplicacao=mult(7,7)
  json.divisao=div(80,10)

  res.send(json)
});

app.listen(3001,  ()=> {
  console.log("App de Exemplo executando na porta 3000!");
});

