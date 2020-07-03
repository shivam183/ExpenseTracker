export const SET_USER_INFORMATION = 'SET_USER_INFORMATION'
export const setUserInfo = user => ({
    type: SET_USER_INFORMATION,
    payload: user
})


export const USER_ERROR='USER_ERROR'
export const userError= error=>({
    type: USER_ERROR,
    payload: error
})


export const LOGOUT='LOGOUT'
export const logout=()=>({
    type:LOGOUT
})