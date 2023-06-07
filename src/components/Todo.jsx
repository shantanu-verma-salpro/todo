import { useState } from "react";
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";
export default function Todo(){
    const [todo,setTodo] = useState(["hello","hi"]);
    return (
        <>
        <TodoItems note={todo} />
        <AddTodo todoList={todo} addTodo={setTodo} />
        </>
    );
}