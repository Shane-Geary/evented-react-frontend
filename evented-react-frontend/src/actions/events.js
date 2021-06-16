import { CREATED_EVENT } from '.'

export const createEvent = (formData, history, groupId) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/events', {
            method: 'POST',
            body: formData,
            headers: {authorization: `Bearer ${localStorage.token}`}
        })  
        .then(resp => {
            if  (resp.ok) {
                console.log("Hello1")
                return resp.json()
            } else {
                return resp.json().then(errors => Promise.reject(errors))
            }
        })
        .then(eventJson => {
            dispatch({
                type: CREATED_EVENT,
                payload: eventJson
            })
            console.log("Hello2")
            history.push(`/groups/${groupId}`);
        })
    }
}