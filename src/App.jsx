import React, { useEffect, useState } from "react";
import Menubar from "./components/Menubar";
import Navbar from './components/Navbar';
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodo] = useState([])
  const [menuClicked, setMenuClicked] = useState(false)

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
      <Navbar todos={todos} setTodo={setTodo} menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <Menubar menuClicked={menuClicked} />
      <h1 className="heading text-center mt-2">What's your plan today?</h1>
      <TodoList todos={todos} setTodo={setTodo} />
    </div>
  );
}

export default App;
