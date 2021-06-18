import React, { useRef, useState } from 'react'
import { FaEdit, FaTrash, FaSave, FaCheck } from 'react-icons/fa'

function Todo(props) {
    const [isReadOnly, setReadOnly] = useState(true)
    const [modifiedTodo, setModifiedTodo] = useState(null)
    const [changeStyle, setChangeStyle] = useState(false)

    const inputRef = useRef()

    function handleInput(e) {
        setModifiedTodo(e.target.value)
    }

    function toggleComplete(e) {
        props.setTodo(props.todos.map(item => {
            return item.id === e.target.id ? {...item, isComplete: !item.isComplete} : {...item}
        }))
    }

    function toggleEdit(e) {
        if(props.id === e.currentTarget.id) {
            setReadOnly(!isReadOnly)
            setChangeStyle(!changeStyle)
            inputRef.current.focus()

            modifiedTodo && props.setTodo(props.todos.map(item => {
                return item.id === e.currentTarget.id ? {...item, title: modifiedTodo} : {...item}
            }))
        }
    }

    function handleDelete(e) {
        props.setTodo(props.todos.filter(item => item.id !== e.currentTarget.id))
    }

    return (
        <div className="todo p-1 mx-auto mt-1">
            <div className="todo__container py-1 px-2">
                <input type="text"
                    ref={inputRef}
                    className={`todo__title ${changeStyle ? 'active' : ''}`}
                    defaultValue={props.title}
                    readOnly={isReadOnly}
                    onChange={handleInput}
                />
                
                <div className="todo__checkbox-container">
                    <input type="checkbox" 
                        name="complete" 
                        id={props.id} 
                        defaultChecked={props.isComplete}
                        className="checkbox"
                        onChange={toggleComplete}
                    />
                    <label htmlFor={props.id} 
                        className={`checkbox-label ${props.isComplete ? "active" : ""}`}
                    >
                        <FaCheck />
                    </label>
                </div>
                
                 {/* Edit button */}
                <button type="button" 
                    className={`btn btn-info btn-sm ${changeStyle ? 'btn-success' : ''}`}
                    id={props.id} 
                    onClick={toggleEdit}
                >
                    {!changeStyle ? <FaEdit /> : <><FaSave className="mr-05" />Save</>}
                </button>

                {/* Delete button */}
                <button type="button" 
                    className="btn btn-danger btn-sm"
                    id = {props.id}
                    onClick={handleDelete}
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default Todo
