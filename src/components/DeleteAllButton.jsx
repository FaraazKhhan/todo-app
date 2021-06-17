import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'

function DeleteAllButton(props) {
    const [totalComplete, setTotalComplete] = useState(null)

    useEffect(() => {
        setTotalComplete(props.todos.filter(todo => todo.isComplete).length)
    }, [props.todos])

    function deleteCompletedTasks() {
        props.setTodo(props.todos.filter(item => item.isComplete !== true));
      }

    return (
        <div className="dlt-btn-container">
            <button type="button"
                className={`btn btn-warning btn-sm del-btn ${totalComplete > 0 ? 'active' : '' }`}
                onClick={deleteCompletedTasks}
            >
                <FaTrash className="mr-05" /> All Completed Tasks
            </button>
        </div>
    )
}

export default DeleteAllButton
