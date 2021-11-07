const express = require("express");
const router = express.Router();

const TodoModel = require("./models/todo");

router.get("/", async (req, res) => {
  try {
    let get_all_task = await TodoModel.find();
    res.send(get_all_task);
  } catch (error) {
    console.log("getAllTask   ->" + error);
  }
});

router.post("/add-todo", async (req, res) => {
  console.log("req.body", req.body);
  try {
    let insertTodo = await TodoModel.create(req.body);
    res.send(insertTodo);
  } catch (error) {
    console.log("error insert todo   ->" + error);
  }
});

router.delete("/delete-todo/:id", async (req, res) => {
  try {
    let delete_task = await TodoModel.findByIdAndRemove({
      _id: req.params.id,
    });
    res.send(delete_task);
  } catch (error) {
    console.log("deleteTask   ->" + error);
  }
});

module.exports = router;
