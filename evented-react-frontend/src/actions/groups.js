import {
    LOADING_GROUPS,
    LOADING_GROUP_EVENTS,
    LOADED_GROUPS,
    LOADED_GROUP_EVENTS,
    CREATED_GROUP,
    DELETED_GROUP
} from '.';
import { deleteGroupConfig } from '../helpers/configOptions'
import { history } from '../helpers/history'
import { error } from '../helpers/notifications'

export const fetchGroups = () => {
    return(dispatch) => {
        dispatch({type: LOADING_GROUPS})
        fetch('http://localhost:3001/groups', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(groupsJson => {
           dispatch({
               type: LOADED_GROUPS, 
               payload: groupsJson
            })
        });
    }
}

export const fetchGroup = (groupId) => {
    return (dispatch) => {
        dispatch({ type: LOADING_GROUP_EVENTS, payload: groupId });
        fetch(`http://localhost:3001/groups/${groupId}`)
        .then((resp) => resp.json())
        .then((groupEventsJson) => {
            dispatch({
                type: LOADED_GROUP_EVENTS,
                payload: groupEventsJson
            })
        });
    };
};

export const createGroup = (formData) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/groups', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
        },
        body: JSON.stringify({group: formData})
    })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            } else {
                return resp.json().then(errors => Promise.reject(errors))
            }
        })
        .then(groupJson => {
            dispatch({
                type: CREATED_GROUP,
                payload: groupJson
            });
        })
    }
}

export const fetchDeleteGroup = (groupId) => {
    return async dispatch => {
        try {
            const token = localStorage.token;
            if (token) {
                const data = await fetch(`http://localhost:3001/groups/${groupId}`, deleteGroupConfig(token))
                if (data.status === 204) {
                    dispatch(deleteGroup(groupId))
                    history.push('/groups')
                } else {
                    error(data.json().error)
                };
            } else {
                history.push('/login')
            };
        } catch (e) { error(e) }
    };
};

export const deleteGroup = (groupId) => ({
    type: DELETED_GROUP,
    payload: groupId
});
