
import Bottomcomponent from "./bottomcomponent";
import "./TodoApp.css";
import Topcomponent from "./topcomponent";
import {useState} from 'react'
function TodoApp(){
    const[todostate, setTodostate]=useState([])

    return (
        <div className="container">
        <div className="row">
            <Topcomponent oldata={todostate} updateTodo={setTodostate} />
            <Bottomcomponent  data={todostate} updateTodo={setTodostate}/>
        </div>
    </div>
    )
}

export default TodoApp; 
