import React, { useEffect, useRef, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { v4 as uuid } from 'uuid';
import Todo from './Todo';

function TodoList({todos, setTodo}) {
    const [newTodo, setNewTodo] = useState(null)    
    const inputRef = useRef();

    function handleInput(e) {
        setNewTodo(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()

        const regex = new RegExp(/^\s+/g)
        // Preventing empty task with whitespace to be added...
        if(regex.test(newTodo)) {
            alert('Empty task no allowed!')
        } else {
            // Preventing duplicate task to be added...
            if(todos.find(todo => todo.title === newTodo)) {
                alert('Todo already exist with same title, try different');
            } else {
                // Preventing empty task to be added...
                if(!newTodo) {
                    alert('Write something...')
                } else {
                    setTodo(currentValue => [...currentValue, {
                        id: uuid(),
                        title: newTodo,
                        isComplete: false
                    }])
                }
            }
        }
        inputRef.current.value = ''
        setNewTodo('')
    }

    function handleDelete(e) {
        setTodo(todos.filter(item => item.id !== e.currentTarget.id))
    }
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    useEffect(() => {
        newTodo && setNewTodo(newTodo.replace(/\s+/g, ' '))
    }, [newTodo])

    return (
        <div className="list-area">
            <div className="todo-list p-1 mx-auto">
                <form onSubmit={handleSubmit} className="todo-list__container">
                    <input type="text" 
                        ref={inputRef} 
                        onChange={handleInput} 
                        className="form-control-dark" 
                        placeholder="Enter your plan" 
                    />
                    <button type="submit" className="btn btn-primary btn-sm">
                    <FaPlus className="mr-05"/> Add
                    </button>
                </form>

            </div>
            {
                todos && todos.map((todo) => (
                    <Todo
                        key={todo.id} 
                        id={todo.id} 
                        title={todo.title} 
                        isComplete={todo.isComplete} 
                        handleDelete={handleDelete}
                        todos={todos}
                        setTodo={setTodo}
                    />
                ))
            }
        </div>
    )
}

export default TodoList
