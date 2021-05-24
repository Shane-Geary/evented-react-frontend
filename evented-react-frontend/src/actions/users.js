

const loginUser = userObj => ({
    type: "LOGIN_USER",
    payload: userObj
})

const authFailed = error => ({
    type: "AUTH_FAILED",
    payload: error
})

export const register = user => {
    return dispatch => {
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                dispatch(authFailed(data.errors))
            } else {
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

export const login = user => {
    return dispatch => {
        return fetch("http://localhost:300/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'ap[;ication/json',
            },
            body: JSON.stringify({user})
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                dispatch(authFailed(data.errors))
            } else {
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

export const getProfile = () => {
    return dispatch => {
        const token = localStorage.token;
        if (token) {
            return fetch("http://localhost:3000/profile", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    localStorage.removeItem("token")
                } else {
                    dispatch(loginUser(data.user))
                }
            })
        }
    }
}

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})