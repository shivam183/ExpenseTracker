import { registerUser, registerError } from '../Actions/register.action'
import axios from 'axios'


export const RegisterUser = user => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post('/api/v1/users/signup', JSON.stringify(user), config)
        if (response.data.success)
            dispatch(registerUser(response.data.data))
        else
            dispatch(registerError(response.data.error))
    } catch (error) {
        dispatch(registerError(error.response.data.error))
    }
}