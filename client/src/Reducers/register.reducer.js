import { REGISTER_USER, REGISTER_ERROR } from '../Actions/register.action'

const initialState = {
    isRegisteredSuccessfully: false,
    error: null
}


export const register = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER_USER: {
            return {
                ...state,
                isRegisteredSuccessfully: true,
                error: null
            }
        }
        case REGISTER_ERROR: {
            return {
                ...state,
                isRegisteredSuccessfully: false,
                error: payload
            }
        }
        default:
            return state
    }
}