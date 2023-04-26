import React, { useState } from 'react'

export default function TodoFrom(props) {
    const [input,setinput] = useState("fff")
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit({
            id : Math.floor(Math.random()*10000),
            text : input,
            priority : 0
        })
        setinput('')
    }
    const handleChange = (e)=>{
        setinput(e.target.value)
        
    }
  return (
    <div>
      <form action="" className='todo-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Add a todo here' value={input} onChange={handleChange} className='todo-input'></input>
            <button className='todo-button'>Add To do</button>
      </form>
    </div>
  )
}
