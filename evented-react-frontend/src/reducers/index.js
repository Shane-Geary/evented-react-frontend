import { combineReducers } from 'redux';
import GroupsReducer from './groupsReducer';

export default combineReducers({
    groups: groupsReducer
})