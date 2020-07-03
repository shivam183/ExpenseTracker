import { SET_USER_INFORMATION, USER_ERROR, LOGOUT } from '../Actions/login.action'


const initialState = {
    token:"",
    _id:"",
    email: "",
    firstName: "",
    lastName: "",
    exp: 0,
    isLoggedIn: false,
    error: null
}

export const login = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_INFORMATION: {
            const ParseData = JSON.parse(atob(payload.data.data.split('.')[1]));
            return {
                ...state,
                isLoggedIn: true,
                _id:ParseData._id,
                email: ParseData.email,
                firstName: ParseData.firstName,
                lastName: ParseData.lastName,
                exp: ParseData.exp,
                token:payload.data.data,
                error:null
            }
        }
        case USER_ERROR:{
            return{
                ...initialState,
                error:payload
            }
        }
        case LOGOUT:{
            return{
                ...initialState
            }
        }
        default:
            return state;
    }
}