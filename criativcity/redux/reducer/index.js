import {combineReducers} from 'redux';
import course from './course';


const rootReducer = combineReducers({
    course: course,
});

export default rootReducer;