import React, { useState } from 'react'
import TodoFrom from './TodoFrom'
import Todo from './Todo';

function TodoList() {
    const [todos,settodos] = useState([])
    const [check , setcheck] = useState(true)
    const addtodo = (todo)=>{
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
          }
          const newtodo = [todo,...todos]
          settodos(newtodo);
          console.log(newtodo)
          
    }
    const completeTodo=(id)=>{
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
              todo.isComplete = !todo.isComplete;
            }
            return todo;
          });
          console.log("Updated todos" + updatedTodos)
          settodos(updatedTodos);   
    }
    const removeTodo = (id)=>{
        const temp = todos.filter(todo => todo.id !=id)
        settodos(temp)
    };
    const Priority = (id,num)=>{
        // const temp = [...todos]
        // temp.map((item,index)=>{
        //     if(item.id===id){
        //         item.priority = num
        //     }
        // })
        // settodos(temp)
        // todos.sort((a,b)=> a.priority-b.priority)
        // settodos(todos)
        // console.log(todos)
        // setcheck(true)
        todos.map((item,index)=>{
            if(item.id===id){
                item.priority = num
            }
        })
        todos.sort((a,b)=> a.priority-b.priority)
        let temp = todos.slice();
        settodos(temp)
    }
    const movetoTop = (id)=>{
        const temp = [...todos]
        const index = temp.findIndex(item => item.id ===id)
        const removeditem = temp.splice(index,1)
        temp.splice(0,0,removeditem[0])
        settodos(temp)
    }
  return (
    <div>
      <h1>What's the plan for today</h1>
      <TodoFrom onSubmit={addtodo}></TodoFrom>
      if(!check)
      {
      <Todo todos={todos}  removeTodo={removeTodo} movetoTop={movetoTop} Priority={Priority} ></Todo>
      }
      </div>
  )
}

export default TodoList

