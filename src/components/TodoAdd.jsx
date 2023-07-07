import { useState } from "react";


const AddToDo = ({todoList, addTodo}) => {
    const [newTodo, setNewTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todoList.includes(newTodo)) {
            return addTodo([...todoList, newTodo])
        } else {
            alert('You can not add the same todo!!');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="toDo">Your to do:</label>
            <input id="toDo" type="text" value={newTodo} onChange={((e) => {setNewTodo(e.target.value)})}/>
            <button>Add new to do</button>
        </form>
    )

}

export default AddToDo;