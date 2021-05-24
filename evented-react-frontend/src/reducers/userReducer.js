const initialState = {
    all: [],
    currentUser: {},
    errors: []
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case "AUTH_FAILED":
            return {
                ...state,
                errors: [].concat(action.payload)
            }
        case "LOGIN_USER":
            const newUser = state.all.find(user => user.id === action.payload.id)
            if (newUser) {
                return {...state, currentUser: action.payload}
            } else {
                return {...state, all: state.all.concat(action.payload), currentUser: action.payload, errors: [] }
            };
            case "LOGOUT_USER":
                return {...state, currentUser: {} }
            default:
                return state;
    }
}