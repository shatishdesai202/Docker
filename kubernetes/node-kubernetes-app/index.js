const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello from this Node.js app!</h1>
  <p>Try sending a request to /error </p>`);
});

app.get("/error", (req, res) => {
  process.exit(1);
});

app.listen(8000, () => {
  console.log("node-kubernetes-app running on 8000");
});
