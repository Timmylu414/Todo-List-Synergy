
import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import { EditTodoForm } from './EditTodoForm';

uuidv4();

const TodoWrapper = () => {
    const [todolist, setTodolist] = useState([])
    const addTodo = todo => {
        setTodolist([...todolist, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todolist)
    }
    const toggleComplete = id => {
        setTodolist(todolist.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    const deleteTodo = id => {
        setTodolist(todolist.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodolist(todolist.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task, id) => {
        setTodolist(todolist.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }
    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todolist.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo} />)

            ))}

        </div>
    )
}

export default TodoWrapper
