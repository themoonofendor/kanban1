import React, {useState} from 'react';
import './App.css';
import {defaultTasks} from "./utils/Constants";
import Board from "./components/Board";
import {removeTaskAndReorderTasks} from "./utils/TaskUtil";
import TopBar from "./components/TopBar";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrimaryLeftSidebar from "./components/PrimaryLeftSidebar";

function App() {

    const [tasks, setTasks] = useState(defaultTasks);

    const updateTasks = (updatedTasks) => {
        setTasks(updatedTasks);
    };

    const removeTask = (taskToBeRemoved) => {
        const newTasks = removeTaskAndReorderTasks(tasks, taskToBeRemoved);
        setTasks(newTasks);
        toast.success('Successfully Deleted!');
    };

    const createTask = (task) => {
        const newTasks = tasks.map(el => {
            if (el.status === task.status) {
                el.index = el.index + 1;
            }
            return el;
        });
        newTasks.push(task);
        setTasks(newTasks);
        toast.success('Successfully Created!');
    };

    const editTask = (editedTask) => {
        const newTasks = [...tasks].map(el => {
            if (el.id === editedTask.id) {
                el.title = editedTask.title;
                el.project = editedTask.project;
                el.priority = editedTask.priority;
            }
            return el;
        });
        console.log(newTasks);
        setTasks(newTasks);
        toast.success('Successfully Saved!');
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                style={{textAlign: 'center'}}
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={true}
                pauseOnHover={false}/>

            <PrimaryLeftSidebar/>
            <div className="col-3-w">
                <TopBar createTask={createTask}/>
                <Board tasks={tasks} updateTasks={updateTasks} removeTask={removeTask} editTask={editTask}/>
            </div>
        </>
    );
}

export default App;
