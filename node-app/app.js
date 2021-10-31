const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));
const port = process.env.PORT || 3000;

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/HTML_File/docker_test.html");
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
