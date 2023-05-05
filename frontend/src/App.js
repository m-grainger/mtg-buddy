import React, { useState, useEffect } from "react";
import "./App.css";
import TodoView from "./components/TodoListView";
import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Read all todos
  useEffect(() => {
    axios.get("http://localhost:8000/api/todo").then((res) => {
      setTodoList(res.data);
    });
  });

  // Post a todo
  const addTodoHandler = () => {
    axios
      .post("http://localhost:8000/api/todo/", {
        title: title,
        description: desc,
      })
      .then((res) => console.log(res));
  };

  return (
    <div class="App list-group-item flex justify-center items-center mx-auto w-96 bg-white mt-4">
      <h6 class="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
      <div class="card-body">
        <h5 class="card text-white bg-dark mb-3">Add Your Task</h5>
        <span class="card-text">
          <input
            class="mb-2 form-control titleIn"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
          />
          <input
            class="mb-2 form-control desIn"
            onChange={(event) => setDesc(event.target.value)}
            placeholder="Description"
          />
          <button
            class="btn btn-outline-primary mx-2 mb-3 rounded-full font-bold"
            onClick={addTodoHandler}
          >
            Add Task
          </button>
        </span>
        <h5 class="card text-white bg-dark mb-3">Your Tasks</h5>
        <div>
          <TodoView todoList={todoList} />
        </div>
      </div>
      <h6 class="card text-dark bg-warning py-1 mb-0">
        Copyright 2021, All rights reserved &copy;
      </h6>
    </div>
  );
}

export default App;
