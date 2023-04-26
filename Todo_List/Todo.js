import React, { useState } from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import { AiOutlineToTop } from "react-icons/ai";


function Todo({todos,removeTodo ,movetoTop,Priority}) {
  const [priority_state , setpriority_state] = useState(0);
  //onChange={(e) => Priority(todo.id,e.target.value)}  
  return todos.map((todo, index) => (
          <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id}>
              {todo.text}
              {/* Priority : {todo.priority} */}
              Priority : {todo.priority}
            </div>
            <div className='icons'>
              <RiCloseCircleLine onClick={() => {removeTodo(todo.id)}}></RiCloseCircleLine>
              <AiOutlineToTop onClick={() => movetoTop(todo.id)}></AiOutlineToTop>
              <div class="col-sm-7 mx-2">
                  <select class="form-select" size="1" aria-label="size 3 select example" onChange={(e)=>{Priority(todo.id,e.target.value)
                  // setpriority_state(e.target.value)
                  }}>
                      <option selected>Priority</option>
                      <option value="1">High</option>
                      <option value="2">Medium</option>
                      <option value="3">Low</option>
                  </select>
              </div>
            </div>
            
          </div>
        ));
}

export default Todo

