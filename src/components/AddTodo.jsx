import { useState } from "react";

export default function AddTodo({ todoList, addTodo }) {
    const [task, setTask] = useState("");
    const submitTask = () => { addTodo([...todoList, task]); setTask("") };
    return <><input type="text" value={task} onChange={e => setTask(e.target.value)} /><button onClick={submitTask}>Add</button></>
}