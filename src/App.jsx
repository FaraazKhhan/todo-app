import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodo] = useState([])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'))
    if(items) {
      setTodo(items)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <Navbar todos={todos} setTodo={setTodo} />
      <h1 className="heading text-center mt-2">What's your plan tody?</h1>
      <TodoList todos={todos} setTodo={setTodo} />
    </div>
  );
}

export default App;
