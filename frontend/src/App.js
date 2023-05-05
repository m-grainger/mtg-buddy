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
    <div class="flex min-h-screen bg-gradient-to-b from-purple-500 to-blue-500">
      <div class="absolute top-0 left-0 mt-4 ml-20">
        <input
          type="text"
          placeholder="Search"
          class="mt-5 ml-4 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          class="ml-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
        >
          Submit
        </button>
      </div>
      <div class="h-screen w-screen flex justify-center items-center mt-10">
        <div class="w-[90%] h-[90%] flex justify-center items-center bg-pink-300 bg-opacity-20 rounded-lg p-10">
          <div class="w-3/5 h-full border-black border-2 rounded-lg mr-4"></div>
          <div class="w-2/5 h-full border-black border-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
