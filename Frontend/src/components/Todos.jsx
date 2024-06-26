import React from 'react'

const Todos = ({todos}) => {
  return (
    <div>
        {todos.map(function(todo){
            <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.complete === true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
  )
}

export default Todos