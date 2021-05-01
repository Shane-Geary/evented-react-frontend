import {
    LOADING_GROUPS,
    LOADED_GROUPS
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
           dispatch({type: LOADED_GROUPS, payload: groupsJson}) 
        });
    }
}