import { setUserInfo, userError } from '../Actions/login.action'
import axios from 'axios'


export const getUser = user => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let body = JSON.stringify(user)
        const response = await axios.post('/api/v1/users/login',body, config)
        dispatch(setUserInfo(response))
    }
    catch (error) {
       dispatch(userError(error.response.data.error))
    }
}