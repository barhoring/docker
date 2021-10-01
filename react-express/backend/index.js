const express = require("express");
const { counter } = require("./helpers");
const app = express();
const port = 3001;

app.get("/", async (req, res) => {
  const count = await counter();
  res.send(`counter=${count}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
