import React, { useEffect, useRef, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { v4 as uuid } from 'uuid';
import Todo from './Todo';

function TodoList({todos, setTodo}) {
    const [newTodo, setNewTodo] = useState(null)    
    const [errorMsg, setErrorMsg] = useState(null)
    const inputRef = useRef();
    const tooltipRef = useRef()

    function handleInput(e) {
        setNewTodo(e.target.value)
        tooltipRef.current.classList.remove('active')
    }
    
    function handleSubmit(e) {
        e.preventDefault()

        const regex = new RegExp(/^\s+/g)
        const _regex = new RegExp(/^\s+([A-z0-9])/g)
        // Preventing empty task with whitespace to be added...
        if(regex.test(newTodo)) {
            if(_regex.test(newTodo)) {
                setNewTodo(newTodo.replace(/^\s+/g, ''))
                setTodo(currentValue => [...currentValue, {
                    id: uuid(),
                    title: newTodo,
                    isComplete: false
                }])
            }
            else {
                inputError('Empty task not allowed!')
            }
        } else {
            // Preventing duplicate task to be added...
            if(todos.find(todo => todo.title === newTodo)) {
                inputError('Same task already exist, try different')
            } else {
                // Preventing empty task to be added...
                if(!newTodo) {
                    inputError('Write something...')
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

    function inputError(message) {
        inputRef.current.classList.add('form-error')
        setErrorMsg(message)
        tooltipRef.current.classList.add('active')
        setTimeout(() => {
            inputRef.current.classList.remove('form-error')
        }, 300)
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

                    <div ref={tooltipRef} className="tooltip">{errorMsg}</div>
                </form>
            </div>
            {
                todos && todos.map((todo) => (
                    <Todo
                        key={todo.id} 
                        id={todo.id} 
                        title={todo.title} 
                        isComplete={todo.isComplete} 
                        todos={todos}
                        setTodo={setTodo}
                    />
                ))
            }
        </div>
    )
}

export default TodoList
