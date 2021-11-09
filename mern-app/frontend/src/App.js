import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [allTodo, setAllTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getAllTodos = async () => {
    await fetch("http://localhost/api")
      .then((res) => res.json())
      .then((data) => {
        setAllTodo(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const handleSubmitButton = async () => {
    setInputValue("");
    if (inputValue !== "") {
      await fetch("http://localhost/api/add-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: inputValue,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          getAllTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDeleteTodo = async (id) => {
    console.log(id);
    if (id) {
      await fetch(`http://localhost/api/delete-todo/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          getAllTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="App">
      <div className="mt-5 gap-4 justify-content-center d-flex">
        <input
          className="col-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="col-2" onClick={handleSubmitButton}>
          submit
        </button>
      </div>
      <div>
        <ul className="p-5">
          {allTodo.map((todo) => (
            <li
              className="list-group-item list-group-item-action list-group-item-success mt-2"
              onClick={() => handleDeleteTodo(todo._id)}
              key={todo._id}
            >
              {todo.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
