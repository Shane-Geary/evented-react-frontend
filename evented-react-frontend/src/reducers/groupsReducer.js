import {
    LOADING_GROUPS,
    LOADING_GROUP_EVENTS,
    LOADED_GROUPS,
    LOADED_GROUP_EVENTS,
    CREATED_GROUP,
    CREATED_EVENT
} from '../actions';

const initialState = {
    loadingState: "inactive",
    arr: []
}

export default function groupsReducer(state = initialState, action) {
    switch(action.type) {
        case LOADING_GROUPS:
            return {...state, loadingState: "inactive"};
        case LOADING_GROUP_EVENTS:
            return {...state, loadingState: "inactive"};
        case LOADED_GROUPS:
            return {arr: action.payload, loadingState: "successful"};
        case LOADED_GROUP_EVENTS:
            const foundGroup = state.arr.find(group => group.id === action.payload.group.id)
            if (foundGroup) {
                return state
            } else {
                return {
                    ...state,
                    arr: state.arr.concat(action.payload.group),
            };
        }
        case CREATED_GROUP:
            return {
                ...state,
                arr: state.arr.concat(action.payload),
                errors: {}
            }
            case CREATED_EVENT:
                //add the new event to the event property of the group in ?
                // debugger
                return {
                    ...state,
                    arr: state.arr.map(group => {
                        if ( group.id === action.payload.group_id ) {
                          return {...group, events: group.events.concat(action.payload) }
                        } else {
                          return group 
                        }
                      })
                }
        default:
            return state
    }
}