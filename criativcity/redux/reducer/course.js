import {
    COURSES
} from '../action/course';


const initialState = {
    CourseList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case COURSES:
            return {
                ...state,
                CourseList: action.data,
            };
    }
    return state;
}