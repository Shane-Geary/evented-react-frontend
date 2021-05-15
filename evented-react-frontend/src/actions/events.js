import { CREATED_EVENT } from '.'

export const createEvent = (formData) => {
    return (dispatch) => {
        return fetch('http://localhost:3001', {
            method: 'POST',
            body: formData
        })  
        .then(resp => {
            if  (resp.ok) {
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
        })
    }
}