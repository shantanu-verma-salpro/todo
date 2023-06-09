import React, { useRef, useState } from "react";
import "../styles/todo.css"

import b1 from '../assets/2.png'
import b2 from '../assets/3.png'
import he from '../assets/head.png'
import flash from '../assets/fl.png'
import earings from '../assets/ea.png'
import inosuke from '../assets/sw.png'
import dem from '../assets/la.png'
import tanjiro from '../assets/ta.png'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const priorityRef = useRef(null);

    const submitTask = () => {
        const title = titleRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        const priority = priorityRef.current.value.trim();

        if (title && description && priority) {
            const newTask = {
                title,
                description,
                priority,
                timestamp: new Date().toLocaleDateString(),
                isCompleted: false,
                id: Date.now(),
            };

            setTasks((prevTasks) => [...prevTasks, newTask]);

            titleRef.current.value = "";
            descriptionRef.current.value = "";
            priorityRef.current.value = "";
        }
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const toggleTaskState = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    const renderTaskInputBox = () => (
        <div>
            <label htmlFor="title">Title</label>
            <input ref={titleRef} id="title" type="text" />
            <label htmlFor="desc">Description</label>
            <input ref={descriptionRef} id="desc" type="text" />
            <label htmlFor="pr">Priority</label>
            <input ref={priorityRef} id="pr" type="number" />
        </div>
    );

    const renderSubmitButton = () => (
        <button onClick={submitTask}>Add Task</button>
    );

    const renderTaskPanel = () =>
        tasks.map((task) => (
            <div key={task.id}>
                <div>{task.title}</div>
                <div>{task.description}</div>
                <div>{task.priority}</div>
                <div>{task.timestamp}</div>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <button onClick={() => toggleTaskState(task.id)}>
                    {task.isCompleted ? "Mark Uncomplete" : "Mark Complete"}
                </button>
            </div>
        ));

    return (
        <div className="container">
            <div className="topCharacters"> <img loading="lazy" className="headerImg" src={he} alt="A random image" /></div>
            <div className="middlePanel">
                <div className="todoPanel">
                    {renderTaskInputBox()}
                    {renderSubmitButton()}
                    {renderTaskPanel()}
                </div>
            </div>
            <div className="bottomCharacters">
            <img  className="nezko" src={dem} alt="A random image" />
            <img className="left_flash" src={flash} alt="A random image" />
            <img className="right_ino" src={inosuke} alt="A random image" />
            
            </div>

        </div>
    );
};

export default Todo;
