import { useMemo } from "react";
export default function TodoItems({note}){
    const renderTodo = useMemo(()=>{
        return <ul>{note.map((x,i)=><li key={i}>{x}</li>)}</ul>;
    },[note])
    return <>{renderTodo}</>;
}