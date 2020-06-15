import React from "react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {defaultStatus} from "../utils/Constants";
import Task from "./Task";
import {getReorderedTasks, getSortedTasksByStatus} from "../utils/TaskUtil";

function Board(props) {

    const getListStyle = (isDraggingOver) => ({
        backgroundColor: isDraggingOver ? '#d7dadc' : '#eff2f4'
    });

    const getComponentByStatus = (tasks, status) => {
        return <>
            <Droppable droppableId={status}>
                {(provided, snapshot) => {
                    return (
                        <div {...provided.droppableProps} style={getListStyle(snapshot.isDraggingOver)}
                             ref={provided.innerRef}
                             className="col bg-color-secondary h-auto ml-3 mr-3 pt-2 rounded no-padding">
                            <span
                                className="status-col-title m-2">{status} {getSortedTasksByStatus(tasks, status).length}{status === defaultStatus.done ? ' of ' + tasks.length : null}</span>
                            {getSortedTasksByStatus(tasks, status).map((el, index) => {
                                return <Task key={el.id} task={el} index={index} removeTask={props.removeTask}
                                             editTask={props.editTask}/>
                            })}
                            {provided.placeholder}
                        </div>
                    );
                }}
            </Droppable>
        </>
    };

    const onDragEnd = result => {
        const {draggableId, source, destination} = result;

        if (!destination) {
            return;
        }
        const reorderedTasks = getReorderedTasks(source, destination, draggableId, props.tasks);
        props.updateTasks(reorderedTasks);
    };

    return (
        <div className="row h-100">
            <DragDropContext onDragEnd={onDragEnd}>
                {getComponentByStatus(props.tasks, defaultStatus.todo)}
                {getComponentByStatus(props.tasks, defaultStatus.inProgress)}
                {getComponentByStatus(props.tasks, defaultStatus.review)}
                {getComponentByStatus(props.tasks, defaultStatus.done)}
            </DragDropContext>
        </div>
    );
};

export default Board;