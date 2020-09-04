import uniqid from "uniqid";

import types from "./actionTypes";

const INITIAL_STATE = {
    username: null,
    lists: [{
        id: uniqid(),
        listTitle: "Starter List",
        tasks: [
            { id: uniqid(), title: "first task", done: false },
            { id: uniqid(), title: "second task", done: false },
        ],
    }, ],
};

const ToDoReducer = (currentState = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.SET_USERNAME:
            return {
                ...currentState,
                username: payload,
            };

        case types.CHECK_TASK:
            return {
                ...currentState,
                lists: currentState.lists.map((item) => {
                    return item.id !== payload.listId ?
                        item :
                        {
                            ...item,
                            tasks: item.tasks.map((task) => {
                                return task.id !== payload.taskId ? task : { id: task.id, title: task.title, done: !task.done };
                            }),
                        };
                }),
            };

        case types.DELETE_LIST:
            return {
                ...currentState,
                lists: currentState.lists.filter((item) => item.id !== payload),
            };

        case types.ADD_LIST:
            return {
                ...currentState,
                lists: [payload, ...currentState.lists],
            };

        case types.UPDATE_LIST:
            return {
                ...currentState,
                lists: currentState.lists.map((item) => (item.id !== payload.listId ? item : payload.newList)),
            };

        default:
            return currentState;
    }
};

export default ToDoReducer;