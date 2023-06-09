import React, { useRef, useState } from "react";
import "../styles/todo.css"

import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        border: '0px',
        background: 'transparent'
    },
};
Modal.setAppElement('#root');
const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <p>{title}</p>
                <span className={isOpen ? "accordion-icon rotate" : "accordion-icon"}>
                    &#x25B6;
                </span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};
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





 
    const renderTaskPanel1 = () =>
        tasks.map((task) => (
            <div key={task.id}>
                <Accordion title={task.title} content={<><div>{task.description}</div>
                    <div>{task.priority}</div>
                    <div>{task.timestamp}</div>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    <button onClick={() => toggleTaskState(task.id)} >
                        {task.isCompleted ? "Mark Uncomplete" : "Mark Complete"}
                    </button></>} />

            </div>
        ));

    return (
        <div className="container">
            <div className="topCharacters"> <img className="headerImg" src={"./head.png"} alt="A random image" />
                <img className="headerea" src={"./ea.png"} alt="A random image" />
            </div>
            <div className="middlePanel">
                <div className="todoPanel">

                    <button className="createTask" onClick={openModal}>Create Task</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Task Creation"
                    >
                        <div class="card">
                            <h2>Task</h2><br></br>
                            <label class="input">
                                <input ref={titleRef} class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Title</span>
                            </label><br></br>
                            <label class="input">
                                <input ref={descriptionRef} class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Description</span>
                            </label><br></br>
                            <label class="input">
                                <input ref={priorityRef} class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Priority</span>
                            </label>
                            <div class="button-group">
                                <button  onClick={submitTask}>Add</button>

                            </div>
                        </div>
                    </Modal>

                    {renderTaskPanel1()}
                   
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
