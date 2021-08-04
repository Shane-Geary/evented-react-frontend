import {
    LOADING_GROUPS,
    LOADING_GROUP_EVENTS,
    LOADED_GROUPS,
    LOADED_GROUP_EVENTS,
    CREATED_GROUP,
    DELETED_GROUP
} from '.';

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

export const deleteGroup = groupId => ({
    type: "DELETED_GROUP",
    payload: groupId
});
