import React from 'react';

export default ({ todos, markComplete }) => {

    return (
        <div className="todo-list">
            {todos.map((todo, i) => (
                <p key={todo.title+i}
                    onClick={() => markComplete(i)}
                    style={{textDecoration: todo.completed? 'line-through' : ''}}
                >
                    {todo.title}
                </p>
            ))}
        </div>
    )
}