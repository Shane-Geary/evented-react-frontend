import { combineReducers, applyMiddleware , createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer';
import groupsReducer from './reducers/groupsReducer';
import eventsReducer from './reducers/eventsReducer';

const rootReducer = combineReducers({
    groups: groupsReducer,
    events: eventsReducer,
    users: usersReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;