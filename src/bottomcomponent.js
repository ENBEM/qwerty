
import react from "react";
import{useState} from "react";

function Bottomcomponent({ data, updateTodo }) {

    function handleDelete(reset){
        updateTodo(data.filter(item => reset !==item));
        }
    return (
        <div className="second">
            {
                data.map(item => {
                    return <div className="done-todo">
                        <input type="checkbox" name="" id="" />
                        <p>{item.task}</p>
                        <p>{item.time}</p>
                        <input type="checkbox" name="" id="" />
                        <button onClick={()=>handleDelete(item)}> DEL </button>
                    </div>
                })
            }
        </div>
    )
}
export default Bottomcomponent;