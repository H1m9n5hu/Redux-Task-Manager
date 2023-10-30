const initialState = [];

const newTask = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload];
        case "DELETE_ALL_TASK":
            return []
        case "DELETE_TASK":
            const filterTasks = state.filter((obj) => obj.id !== action.payload);
            return filterTasks;
        case "EDIT_TASK":
            let editedData = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if(item.id === editedData.id){
                    item.id = editedData.id;
                    item.task = editedData.task;
                }
                updatedArray.push(item);
            });
            return updatedArray;
        default:
            return state;
    }
};

export default newTask;