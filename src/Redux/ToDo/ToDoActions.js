import types from "./actionTypes";

export const setUsername = (username) => ({
    type: types.SET_USERNAME,
    payload: username,
});

export const checkTask = (listId, taskId) => ({
    type: types.CHECK_TASK,
    payload: { listId, taskId },
});

export const addList = (newList) => ({
    type: types.ADD_LIST,
    payload: newList,
});

export const deleteList = (listId) => ({
    type: types.DELETE_LIST,
    payload: listId,
});

export const updateList = (listId, newList) => ({
    type: types.UPDATE_LIST,
    payload: { listId, newList },
});