import {
    ADD_GROUP,
    LOADING_GROUPS,
    LOADED_GROUPS,
    FAILED_LOADING_GROUPS
} from '../actions';

const defaultState = {
    loadingState: "inactive",
    arr: []
}


export default function groupsReducer(state = defaultState, action) {
    switch(action.type) {
        case LOADING_GROUPS:
            return {...state, loadingState: "loading"};
            case LOADED_GROUPS:
                return {arr: action.payload, loadingState: "successful"};
        default:
            return state 
    }
}