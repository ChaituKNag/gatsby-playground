import React, { useState } from "react"
import { Link } from "gatsby"

import TodoForm from "../components/todo-form"
import TodoList from "../components/todo-list"

const initialTodos = [
  { title: "bring chores", completed: false },
  { title: "play with kids", completed: true },
]
export default () => {
  const [todos, setTodos] = useState(initialTodos)
  return (
    <div>
      <Link to="/about">About Page</Link>
      <TodoForm add={todo => setTodos([todo, ...todos])} />
      <TodoList
        todos={todos}
        markComplete={i =>
          setTodos(
            todos.map((todo, k) =>
              k === i ? { ...todo, completed: !todo.completed } : todo
            )
          )
        }
      />
    </div>
  )
}
