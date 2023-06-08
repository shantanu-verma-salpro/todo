import React, { useRef, useState } from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const inputRefs = useRef({
        title: null,
        description: null,
        priority: null
    });

    const handleTaskSubmit = () => {
        const title = inputRefs.current.title.value.trim();
        const description = inputRefs.current.description.value.trim();
        const priority = inputRefs.current.priority.value.trim();

        if (title && description && priority) {
            const newTask = {
                title,
                description,
                priority,
                timestamp: new Date().toLocaleDateString(),
                isCompleted: false
            };

            setTasks((prevTasks) => [...prevTasks, newTask]);

            // Reset input values
            inputRefs.current.title.value = "";
            inputRefs.current.description.value = "";
            inputRefs.current.priority.value = "";
        }
    };

    const renderTaskInputBox = () => (
        <>
            <label htmlFor="title">Title</label>
            <input ref={inputRefs.current.title} id="title" type="text" />
            <label htmlFor="desc">Description</label>
            <input ref={inputRefs.current.description} id="desc" type="text" />
            <label htmlFor="pr">Priority</label>
            <input ref={inputRefs.current.priority} id="pr" type="number" />
        </>
    );

    const renderSubmitButton = () => (
        <button onClick={handleTaskSubmit}>Add Task</button>
    );

    const renderTaskPanel = () =>
        tasks.map((task) => (
            <div key={task.timestamp}>
                <div>{task.title}</div>
                <div>{task.description}</div>
                <div>{task.priority}</div>
                <div>{task.timestamp}</div>
            </div>
        ));

    return (
        <>
            {renderTaskInputBox()}
            {renderSubmitButton()}
            {renderTaskPanel()}
        </>
    );
};

export default Todo;
