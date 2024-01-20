import React from 'react'
import { TodoProps } from './TodoList';

function TodoItem({ todo, deleteTodo, toggleCompleted }: { todo: TodoProps, deleteTodo: Function, toggleCompleted: Function }): React.ReactElement {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p className={todo.completed ? 'completed' : ''}>{todo.text}</p>
      <button className="deleteButton" onClick={() => deleteTodo(todo.id)} >X</button>
    </div>
  )
}

export default TodoItem
