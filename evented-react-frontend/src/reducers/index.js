import { combineReducers } from 'redux';
import groupsReducer from './groupsReducer';
import eventsReducer from './eventsReducer';
import userReducer  from './userReducer';


export default combineReducers({
    groups: groupsReducer,
    events: eventsReducer,
    users: userReducer
})