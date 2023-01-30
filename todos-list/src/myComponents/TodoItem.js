import React from 'react'

export default function todoItem({todo,onDelete}) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
      <hr></hr>
    </div>
  )
}
