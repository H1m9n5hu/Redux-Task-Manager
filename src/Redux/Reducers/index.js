import { combineReducers } from 'redux';
import newTask from './taskReducer';

const rootReducer = combineReducers({
    newTask
})

export default rootReducer;