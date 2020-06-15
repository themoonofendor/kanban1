import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {defaultProject, defaultStatus} from "../../utils/Constants";
import {v4 as uid} from "uuid";

function CreateTaskModal(props) {

    const [currentTaskName, setCurrentTaskName] = useState('');
    const [currentProject, setCurrentProject] = useState(defaultProject.seedAdv);
    const [currentPriority, setCurrentPriority] = useState('3');

    const handleClose = () => {
        setCurrentTaskName('');
        setCurrentProject(defaultProject.seedAdv);
        setCurrentPriority('3');
        props.setCreateTaskMode(false);
    }

    const onTaskNameChange = (e) => {
        setCurrentTaskName(e.target.value);
    };

    const onProjectChange = (e) => {
        setCurrentProject(e.target.value);
    };

    const onPriorityChange = (e) => {
        setCurrentPriority(e.target.value);
    };

    const onClickSaveChanges = () => {
        const task = {
            id: uid(),
            project: currentProject,
            priority: Number(currentPriority),
            index: 0,
            status: defaultStatus.todo,
            title: currentTaskName
        };
        handleClose();
        props.createTask(task);
    };

    return (
        <Modal show={props.isCreateTaskMode} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Create New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="formInput">Task</label>
                    <input type="text" className="form-control" id="formInput"
                           placeholder="Enter task name..." value={currentTaskName} onChange={onTaskNameChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formSelectProject">Project</label>
                    <select id="formSelectProject" className="custom-select" value={currentProject}
                            onChange={onProjectChange}>
                        <option value={defaultProject.seedAdv}>{defaultProject.seedAdv}</option>
                        <option value={defaultProject.seedAdv}>{defaultProject.businessSys}</option>
                        <option value={defaultProject.techOps}>{defaultProject.techOps}</option>
                        <option value={defaultProject.rcData}>{defaultProject.rcData}</option>
                        <option value={defaultProject.vd2}>{defaultProject.vd2}</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="formSelectPriority">Priority</label>
                    <select id="formSelectPriority" className="custom-select" value={currentPriority}
                            onChange={onPriorityChange}>
                        <option value="0">Blocker - P0</option>
                        <option value="1">Critical - P1</option>
                        <option value="2">Major - P2</option>
                        <option value="3">Minor - P3</option>
                        <option value="4">Trivial - P4</option>
                    </select>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-light my-button" onClick={handleClose}>
                    Close
                </Button>
                <Button className="btn btn-light my-button" onClick={() => onClickSaveChanges()} disabled={!currentTaskName.trim()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTaskModal;