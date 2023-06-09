import React, { useRef, useState } from "react";
import "../styles/todo.css"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding:'0px',
        border:'0px',
        background: 'transparent'
    },
};
Modal.setAppElement('#root');
const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const priorityRef = useRef(null);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        ;
    }

    function closeModal() {
        setIsOpen(false);
    }
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
            <div className="topCharacters"> <img className="headerImg" src={"./head.png"} alt="A random image" />
                <img className="headerea" src={"./ea.png"} alt="A random image" />
            </div>
            <div className="middlePanel">
                <div className="todoPanel">

                    <button onClick={openModal}>Create Task</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Task Creation"
                    ><div className="taskp"> {renderTaskInputBox()} {renderSubmitButton()}<button onClick={closeModal}>Task Panel</button></div></Modal>

                    {renderTaskPanel()}
                </div>
            </div>
            <div className="bottomCharacters">
                <img className="nezko" src={"./la.png"} alt="A random image" />
                <div>
                    <img className="left_flash" src={"./fl.png"} alt="A random image" />
                    <img className="right_ino" src={"./sw.png"} alt="A random image" />
                </div>
                <img className="tanjiro" src={"./ta.png"} alt="A random image" />
            </div>

        </div>
    );
};

export default Todo;
