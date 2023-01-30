import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or desc cannot be blank")
        }else{
            props.addTodo(title,desc);
            setDesc("");
            setTitle("")
        }
    }
  return (
    <div className='container'>
        <h3 className='text-center my-3'>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Todo Desc</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
  </div>
  <button type="submit" className="btn btn-success">Add Todo</button>
</form>

    </div>
  )
}

export default AddTodo
