export const addTask = (data) => {
    return {
        type: 'ADD_TASK',
        payload: data
    }
}

export const deleteTask = (data) => {
    return {
        type: 'DELETE_TASK',
        payload: data
    }
}

export const deleteAllTask = () => {
    return {
        type: 'DELETE_ALL_TASK'
    }
}

export const updateTask = (data) => {
    return {
        type: "EDIT_TASK",
        payload: data
    }
}