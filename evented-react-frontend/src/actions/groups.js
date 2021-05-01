export const fetchGroups = () => {
    return(dispatch) => {
        dispatch({type: })
        fetch('http://localhost:3001/groups', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(groupsJson => {
            this.setState({
                groups: groupsJson,
                loading: false 
            })
        })
    }
}