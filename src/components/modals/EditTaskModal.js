import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {defaultProject} from "../../utils/Constants";

function EditTaskModal(props) {

    const [currentTaskName, setCurrentTaskName] = useState(props.task.title);
    const [currentProject, setCurrentProject] = useState(props.task.project);
    const [currentPriority, setCurrentPriority] = useState(String(props.task.priority));

    const onTaskNameChange = (e) => {
        setCurrentTaskName(e.target.value);
    };

    const onProjectChange = (e) => {
        setCurrentProject(e.target.value);
    };

    const onPriorityChange = (e) => {
        setCurrentPriority(e.target.value);
    };

    const handleClose = () => props.setEditTaskMode(false);

    const onClickSaveChanges = () => {
        const task = {
            id: props.task.id,
            project: currentProject,
            priority: Number(currentPriority),
            index: props.task.index,
            status: props.task.status,
            title: currentTaskName
        };
        handleClose();
        props.editTask(task);
    };

    return (
        <Modal show={props.isEditTaskMode} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Task</Modal.Title>
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
                <Button className="btn btn-light my-button" onClick={() => onClickSaveChanges()}
                        disabled={!currentTaskName.trim()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditTaskModal;