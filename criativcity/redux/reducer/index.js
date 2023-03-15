import { combineReducers } from 'redux';
import course from './course';
import user from './user';


const rootReducer = combineReducers({
    course: course,
    user: user
});

export default rootReducer;