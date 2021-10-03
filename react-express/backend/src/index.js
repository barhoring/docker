const express = require("express");
const cors = require("cors");
const { counter2 } = require("./helpers");
const app = express({ origin: "https://localhost:3000" });
const port = 3001;

app.use(cors());

app.get("/", async (req, res) => {
  const count = await counter2.read();
  res.send(`counter=${count}`);
});

app.get("/add", async (req, res) => {
  const count = await counter2.add();
  res.send(`counter=${count}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
