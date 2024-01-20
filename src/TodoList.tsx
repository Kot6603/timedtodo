import React, { useState } from 'react'
import TodoItem from './TodoItem'

export type TodoProps = {
  id: number,
  text: string,
  completed: boolean,
}


function TodoList(): React.ReactElement {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [text, setText] = useState<string>('')

  function addTodo(text: string): void {
    const newTask: TodoProps = {
      id: Date.now(),
      text,
      completed: false,
    }

    setTodos([...todos, newTask])
    setText('')
  }

  function deleteTodo(id: number): void {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }


  function toggleCompleted(id: number): void {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    }));
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>

      <form onSubmit={e => {
        e.preventDefault()
        addTodo(text)
      }} className="todoForm">
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>

      <div className="todo-list-items">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>

    </div >
  )
}

export default TodoList;
