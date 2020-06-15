import {v4 as uid} from 'uuid';

export const defaultStatus = {todo: 'To Do', inProgress: 'In Progress', review: 'Review', done: 'Done'};

export const defaultProject = {
    seedAdv: 'Seed Adv Management',
    techOps: 'TechOps (TOPS)',
    rcData: 'RC Data',
    businessSys: 'Business Systems',
    vd2: 'VD2 Web & UX'
};

export const defaultTasks = [
    {
        id: uid(),
        project: defaultProject.seedAdv,
        priority: 2,
        index: 0,
        status: defaultStatus.todo,
        title: 'Create Kanban board using React js'
    },
    {
        id: uid(),
        project: defaultProject.vd2,
        priority: 4,
        index: 0,
        status: defaultStatus.inProgress,
        title: 'Update bootstrap version from 4.4.3 to 4.5.0'
    },
    {
        id: uid(),
        project: defaultProject.seedAdv,
        priority: 0,
        index: 0,
        status: defaultStatus.review,
        title: 'Fix user authentication on production build'
    },
    {
        id: uid(),
        project: defaultProject.vd2,
        priority: 1,
        index: 0,
        status: defaultStatus.done,
        title: 'Submit button became disabled after 1 min. of inactivity'
    },
    {
        id: uid(),
        project: defaultProject.vd2,
        priority: 2,
        index: 2,
        status: defaultStatus.todo,
        title: 'JS error clicking on \'Create new Batch\''
    },
    {
        id: uid(),
        project: defaultProject.rcData,
        priority: 1,
        index: 1,
        status: defaultStatus.todo,
        title: 'Add new schema for QA build'
    },
    {
        id: uid(),
        project: defaultProject.businessSys,
        priority: 3,
        index: 3,
        status: defaultStatus.todo,
        title: 'Create new H1 styles on Task page'
    },
    {
        id: uid(),
        project: defaultProject.techOps,
        priority: 2,
        index: 1,
        status: defaultStatus.inProgress,
        title: 'Populate RC data to pct_event_g table'
    },
    {
        id: uid(),
        project: defaultProject.businessSys,
        priority: 0,
        index: 1,
        status: defaultStatus.done,
        title: 'Create pipeline for performance testing'
    },
    {
        id: uid(),
        project: defaultProject.vd2,
        priority: 3,
        index: 2,
        status: defaultStatus.inProgress,
        title: 'Incorrect translation of word \'slice\' for locale Ru'
    },
    {
        id: uid(),
        project: defaultProject.seedAdv,
        priority: 2,
        index: 1,
        status: defaultStatus.review,
        title: 'Create documentation for the new client \'Pear inc..\''
    },
    {
        id: uid(),
        project: defaultProject.techOps,
        priority: 1,
        index: 4,
        status: defaultStatus.todo,
        title: 'Create new instance for QA environment '
    }
];