import React from 'react'
import TodoItem from "../myComponents/TodoItem"
export default function Todos(props) {
    let styleO ={
        minHeight : "389px"
    }
    return (
    <div className='container' style={styleO}>
        <h3 className='my-3'>Todo's</h3>
      {
        
        props.todos.length===0 ? "No Todos to display": props.todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}
