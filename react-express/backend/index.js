const express = require("express");
const { counter } = require("./helpers");
const app = express();
const port = 3001;
// host: "0.0.0.0",

app.get("/", async (req, res) => {
  const count = await counter();
  //   const count = "wtf";
  res.send(`counter=${count}`);
});

app.listen(port, () => {
  // app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
