import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function RemoveTaskModal(props) {

    const handleClose = () => props.setRemoveTaskMode(false);

    const onClickDelete = () => {
        props.setRemoveTaskMode(false)
        props.removeTask(props.task);
    };

    return (
        <Modal show={props.isRemoveTaskMode} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you wish to delete this task?</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.task.title}</Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-light my-button" onClick={handleClose}>
                    Cancel
                </Button>
                <Button className="btn btn-light my-button" onClick={() => onClickDelete()}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RemoveTaskModal;