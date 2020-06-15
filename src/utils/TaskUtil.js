import {defaultStatus} from './Constants';

export const getSortedTodoTasks = (tasks) => tasks.filter(el => el.status === defaultStatus.todo).sort((a, b) => a.index - b.index);
export const getSortedInProgressTasks = (tasks) => tasks.filter(el => el.status === defaultStatus.inProgress).sort((a, b) => a.index - b.index);
export const getSortedReviewTasks = (tasks) => tasks.filter(el => el.status === defaultStatus.review).sort((a, b) => a.index - b.index);
export const getSortedDoneTasks = (tasks) => tasks.filter(el => el.status === defaultStatus.done).sort((a, b) => a.index - b.index);

export const getSortedTasksByStatus = (tasks, columnStatus) => {
    switch (columnStatus) {
        case defaultStatus.todo:
            return [...getSortedTodoTasks(tasks)];
        case defaultStatus.inProgress:
            return [...getSortedInProgressTasks(tasks)];
        case defaultStatus.review:
            return [...getSortedReviewTasks(tasks)];
        default:
            return [...getSortedDoneTasks(tasks)];
    }
};

export const getReorderedTasks = (source, destination, draggableId, tasks) => {
    if (source.droppableId === destination.droppableId) {
        const newTasks = [...tasks];

        if (destination.index < source.index) {
            newTasks.map(el => {
                if (el.status === source.droppableId && el.index >= destination.index && el.index < source.index) {
                    el.index = el.index + 1
                }
                return el;
            });
        } else {
            newTasks.map((el) => {
                if (el.status === source.droppableId && el.index <= destination.index && el.index > source.index) {
                    el.index = el.index - 1
                }
                return el;
            });
        }

        newTasks.map((el) => {
            if (el.status === source.droppableId && el.id === draggableId) {
                el.index = destination.index;
            }
            return el;
        });
        return newTasks;
    } else {

        const newTasks = tasks.map((el) => {
            if (el.status === source.droppableId && el.index > source.index) {
                el.index = el.index - 1;
            } else if (el.status === destination.droppableId && el.index >= destination.index) {
                el.index = el.index + 1;
            }
            return el;
        });

        newTasks.map(el => {
            if (el.id === draggableId) {
                el.status = destination.droppableId;
                el.index = destination.index;
            }
            return el;
        });
        return newTasks;

    }
}

export const removeTaskAndReorderTasks = (tasks, taskToBeRemoved) => {
    // eslint-disable-next-line array-callback-return
    return tasks.filter(el => {
        if (el.status === taskToBeRemoved.status) {
            if (el.index > taskToBeRemoved.index) {
                el.index = el.index - 1;
            }
            if (el.id !== taskToBeRemoved.id) {
                return el;
            }
        } else {
            return el;
        }
    });
};