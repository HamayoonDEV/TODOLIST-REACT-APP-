import { useState } from "react";
import React from "react";
import "./index.css"
function App(){

    const [todos,settodos] = useState([])
    const [task,settask] = useState("")
    console.log(todos)

    function add(){

        settodos(oldToDos=>{
            return [...oldToDos,task]
        })

    }
    function remove(){
        todos.pop(todos.length-1)
    }
    


    return <div>
        <h1>TO DO LIST</h1>
        <input type = "text" value={task} onChange = {e=>{
            settask(e.target.value)
        }} />
        <button onClick={add} >ADD</button>
        <button onClick={remove} >REMOVE</button>
        
        <ul>  
            {todos.map(todo=>{
               return <li>{todo}</li>
            })}

        </ul>

    </div>
}

export default App