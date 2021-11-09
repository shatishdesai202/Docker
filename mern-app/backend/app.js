const fs = require("fs");
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const Router = require("./routes");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "access.log"),
  { flags: "a" }
);

app.use(cors());
app.use(morgan("tiny", { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", Router);

mongoose.connect(
  // "mongodb://localhost:27017/docker_example",
  // "mongodb://host.docker.internal:27017/docker_example",
  "mongodb://mongoDB:27017/docker_example", // mongoDb container name
  // "mongodb://a:a@mongoDB:27017/docker_example?authSource=admin", // add usr and pwd through env varianbe
  {
    useNewUrlParser: true,
  },
  () => console.log("connected to mongoDB")
);

app.listen(80, () => {
  console.log("Server is running at port 80");
});
