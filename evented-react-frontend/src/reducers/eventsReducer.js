import {
    LOADED_GROUP_EVENTS,
    LOADING_GROUP_EVENTS
} from '../actions';

const initialState = {
    groupsLoaded: {},
    arr: []
}

export default function eventsReducer(state=initialState, action) {
    switch(action.type) {
        case LOADING_GROUP_EVENTS:
            return{
                ...state,
                groupsLoaded: {...state.groupsLoaded, [action.payload]: "loading"},
            };
        case LOADED_GROUP_EVENTS:
            return {
                groupsLoaded: {...state.groupsLoaded, 
                [action.payload.group.id]: "successful",
                },
                arr: state.arr.filter(event => event.groupId !== action.payload.events).concat(action.payload.events)
            }
        default:
            return state
    }
}