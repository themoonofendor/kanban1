import React, {useState} from "react";
import {Draggable} from "react-beautiful-dnd";
import trash from '../images/trash.svg'
import pencil from '../images/pencil.svg'
import blocker from '../images/blocker.svg'
import critical from '../images/critical.svg'
import major from '../images/major.svg'
import minor from '../images/minor.svg'
import trivial from '../images/trivial.svg'
import EditTaskModal from "./modals/EditTaskModal";
import {defaultProject} from "../utils/Constants";
import RemoveTaskModal from "./modals/RemoveTaskModal";

function Task(props) {

    const showProject = () => {
        let appliedClass;
        switch (props.task.project) {
            case defaultProject.seedAdv:
                appliedClass = 'badge-warning';
                break;
            case defaultProject.techOps:
                appliedClass = 'badge-info';
                break;
            case defaultProject.rcData:
                appliedClass = 'badge-danger';
                break;
            case defaultProject.businessSys:
                appliedClass = 'badge-success';
                break;
            default:
                appliedClass = 'badge-primary';
        }
        return <span className={`badge ${appliedClass} mb-2`}>{props.task.project}</span>
    };

    const showPriority = () => {
        switch (props.task.priority) {
            case 0:
                return <>P{props.task.priority} <img className="priority-ic mb-1" src={blocker} alt="Blocker"/></>
            case 1:
                return <>P{props.task.priority} <img className="priority-ic mb-1" src={critical} alt="Critical"/></>
            case 2:
                return <>P{props.task.priority} <img className="priority-ic mb-1" src={major} alt="Major"/></>
            case 3:
                return <>P{props.task.priority} <img className="priority-ic mb-1" src={minor} alt="Minor"/></>
            default:
                return <>P{props.task.priority} <img className="priority-ic mb-1" src={trivial} alt="Trivial"/></>
        }
    }

    const [isEditTaskMode, setEditTaskMode] = useState(false);
    const [isRemoveTaskMode, setRemoveTaskMode] = useState(false);

    const getItemStyle = (isDragging, draggableStyle) => ({
        backgroundColor: isDragging ? '#f5f8f8' : 'white',
        ...draggableStyle
    });

    const onClickRemoveTask = () => {
        setRemoveTaskMode(true);
    };

    const onClickEditTask = () => {
        setEditTaskMode(true)
    };

    return (
        <Draggable key={props.task.id} draggableId={props.task.id} index={props.task.index}>
            {
                (provided, snapshot) => {
                    return (<div className="card m-2" {...provided.draggableProps}
                                 {...provided.dragHandleProps} ref={provided.innerRef} style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}>
                        <EditTaskModal isEditTaskMode={isEditTaskMode} setEditTaskMode={setEditTaskMode}
                                       task={props.task} editTask={props.editTask}/>

                        <RemoveTaskModal isRemoveTaskMode={isRemoveTaskMode} setRemoveTaskMode={setRemoveTaskMode}
                                         task={props.task} removeTask={props.removeTask}/>
                        <div className="card-body">
                            <p>{props.task.title}</p>
                            {showProject()}
                            <div className="row">
                                <div className="col-8 my-auto">
                                    {showPriority()}
                                </div>
                                <div className="col-2" onClick={() => onClickEditTask()}>
                                    <img className="icon" src={pencil} alt="Edit"/>
                                </div>
                                <div className="col-2" onClick={() => onClickRemoveTask()}>
                                    <img className="icon" src={trash} alt="Trash"/>
                                </div>
                            </div>
                        </div>
                    </div>);
                }
            }
        </Draggable>
    );
}

export default Task;