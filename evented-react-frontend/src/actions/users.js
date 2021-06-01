import { postConfig } from '../helpers/configOptions';
import { error, success } from '../helpers/notifications';

const loginUser = userObj => ({
    type: "LOGIN_USER",
    payload: userObj
})

const authFailed = error => ({
    type: "AUTH_FAILED",
    payload: error
})

export const register = (user) => {
    return async dispatch => {
        try {
            dispatch({ type: 'CREATING_OR_GETTING_USER' })
            const data = await fetch('http://localhost:3001/users', postConfig(user)).then(resp => resp.json())
            if (data.errors) {
                dispatch(authFailed(data.errors))
            } else {
                localStorage.setItem('token', data.jwt)
                dispatch(loginUser(data.user))
                success(`Welcome ${data.user.username}, your account has been created!`)

            };
        } catch (e) {
            error(e)
            throw e
        }
    };
};

export const login = (user) => {
    return async dispatch => {
        try {
            dispatch({ type: 'CREATING_OR_GETTING_USER' })
            const data = await fetch("http://localhost:3001/login", postConfig(user)).then(resp => resp.json())
            if (data.failure) {
                dispatch(authFailed(data.failure))
            } else {
                localStorage.setItem('token', data.jwt)
                dispatch(loginUser(data.user))
                success(`Welcome back ${data.user.username}`)
            };
        } catch (e) {
            error(e)
            throw e
        }
    };
};

// export const getProfile = () => {
//     return async dispatch => {
//         try {

//             const token = localStorage.token;
//             if (token) {
//                 const data = await fetch("http://localhost:3001/auto_login", getProfileConfig(token))
//                     .then(resp => resp.json());
//                 if (data.message) {
//                     localStorage.removeItem('token')

//                 } else {
//                     dispatch(loginUser(data.user))
//                 };

//             }
//         } catch (e) {
//             error(e)
//             throw e
//         }
//     };
// };

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})