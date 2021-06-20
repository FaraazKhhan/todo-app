import React, {useEffect, useState} from "react";
import { FaTrash } from 'react-icons/fa'
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri'

function Navbar(props) {
  const [totalTodos, setTotalTodos] = useState(props.todos.length)
  const [totalComplete, setTotalComplete] = useState(null)

  function deleteCompletedTasks() {
    props.setTodo(props.todos.filter(item => item.isComplete !== true));
  }

  function handleMenuBtn() {
    props.setMenuClicked(!props.menuClicked)
  }
  
  useEffect(() => {
    setTotalTodos(props.todos.length)
    setTotalComplete(props.todos.filter(todo => todo.isComplete).length)
  }, [props.todos])

  return (
    <header className="header">

      <nav className="navbar mx-auto">
        <h3 className="navbar__logo">Planno</h3>

        <div className="navbar__info-container">
            <p className="mr-1">Total: <span>{totalTodos}</span></p>
            <p>Completed: <span>{totalComplete}</span></p>
        </div>

        <div className="navbar__menu-btn" onClick={handleMenuBtn}>
          {props.menuClicked ? <RiMenuUnfoldLine style={{fontSize: '1.5rem'}} /> : <RiMenuFoldLine style={{fontSize: '1.5rem'}} />}
        </div>

        <button type="button"
          className={`btn btn-warning btn-sm navbar__del-btn ${totalComplete > 0 ? 'active' : '' }`}
          onClick={deleteCompletedTasks}
        >
          <FaTrash className="mr-05" /> All Completed Tasks
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
