import {
    USERDETAIL
} from '../action/user';


const initialState = {
    UserDetail: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USERDETAIL:
            return {
                ...state,
                UserDetail: action.data,
            };
    }
    return state;
}