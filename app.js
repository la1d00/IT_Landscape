const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hallo, dit is mijn CI/CD Docker app!");
});

app.listen(3000, () => {
  console.log("App draait op poort 3000");
});
