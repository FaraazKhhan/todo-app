import React, {useEffect, useState} from "react";
import { FaTrash } from 'react-icons/fa'

function Navbar(props) {
  const [totalTodos, setTotalTodos] = useState(props.todos.length)
  const [totalComplete, setTotalComplete] = useState(null)

  function deleteCompletedTasks() {
    props.setTodo(props.todos.filter(item => item.isComplete !== true));
  }
  
  useEffect(() => {
    setTotalTodos(props.todos.length)
    setTotalComplete(props.todos.filter(todo => todo.isComplete).length)
  }, [props.todos])

  return (
    <header className="header">

      <nav className="navbar mx-auto">
        <h3 className="navbar__logo">Todo App</h3>

        <div className="navbar__info-container">
            <p className="mr-1">Total: <span>{totalTodos}</span></p>
            <p>Completed: <span>{totalComplete}</span></p>

            <button type="button"
            className={`btn btn-warning btn-sm del-btn ${totalComplete > 0 ? 'active' : '' }`}
            onClick={deleteCompletedTasks}
        >
            <FaTrash className="mr-05" /> All Completed Tasks
        </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
