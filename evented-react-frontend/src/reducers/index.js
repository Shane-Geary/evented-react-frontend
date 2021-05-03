import { combineReducers } from 'redux';
import groupsReducer from './groupsReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
    groups: groupsReducer,
    events: eventsReducer
})